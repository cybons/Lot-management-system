# tools/generate_er.py
# Python 3.12 / Windows OK / Java不要・pygraphviz不要
import argparse
from pathlib import Path
from typing import Dict, List

from sqlalchemy import create_engine, MetaData, inspect
from graphviz import Digraph

def build_graph(metadata: MetaData) -> Digraph:
    g = Digraph("ER", format="svg")
    g.attr(rankdir="LR", fontsize="10", labelloc="t")
    g.node_attr.update(shape="record", fontsize="9")

    # ノード: {table|col: type ...}
    for table in metadata.sorted_tables:
        cols = []
        pks = {c.name for c in table.primary_key}
        for c in table.columns:
            typ = str(c.type)
            mark = " (PK)" if c.name in pks else ""
            nn = " NOT NULL" if not c.nullable else ""
            cols.append(f"{c.name}: {typ}{mark}{nn}")
        label = "{%s|%s}" % (table.name, r"\l".join(cols) + r"\l")
        g.node(table.name, label=label)

    # エッジ: 外部キー
    for table in metadata.sorted_tables:
        for fk in table.foreign_keys:
            src = table.name
            dst = fk.column.table.name
            g.edge(src, dst, label=f"{fk.parent.name}→{fk.column.name}", arrowsize="0.7")
    return g

def build_mermaid(metadata: MetaData) -> str:
    lines: List[str] = ["erDiagram"]
    # エンティティ
    for t in metadata.sorted_tables:
        lines.append(f"  {t.name} {{")
        pks = {c.name for c in t.primary_key}
        for c in t.columns:
            typ = str(c.type).replace(" ", "_")
            pk = " PK" if c.name in pks else ""
            nn = " NOT_NULL" if not c.nullable else ""
            lines.append(f"    {typ} {c.name}{pk}{nn}")
        lines.append("  }")
    # リレーション（単純化: many-to-one を o{--|| として描画）
    for t in metadata.sorted_tables:
        for fk in t.foreign_keys:
            lines.append(f"  {t.name} }}o--|| {fk.column.table.name} : {fk.parent.name}_to_{fk.column.name}")
    return "\n".join(lines)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--url", required=True, help="SQLAlchemy URL (e.g. postgresql://admin:dev_password@localhost:5432/lot_management)")
    ap.add_argument("--schema", default="public")
    ap.add_argument("--out", default="docs/schema/er_diagram")
    args = ap.parse_args()

    engine = create_engine(args.url, future=True)
    metadata = MetaData()
    metadata.reflect(bind=engine, schema=args.schema)

    Path(args.out).parent.mkdir(parents=True, exist_ok=True)

    # Graphviz SVG
    dot = build_graph(metadata)
    svg_path = Path(f"{args.out}.svg")
    dot.render(svg_path.with_suffix(""), cleanup=True)
    print(f"[OK] SVG: {svg_path}")

    # Mermaid
    mmd = build_mermaid(metadata)
    mmd_path = Path(f"{args.out}.mmd")
    mmd_path.write_text(mmd, encoding="utf-8")
    print(f"[OK] Mermaid: {mmd_path}")

if __name__ == "__main__":
    main()

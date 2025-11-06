import logging
import sys


def setup_json_logging(level: str = "INFO"):
    handler = logging.StreamHandler(sys.stdout)
    formatter = logging.Formatter("%(message)s")
    handler.setFormatter(formatter)

    root = logging.getLogger()
    root.handlers.clear()
    root.addHandler(handler)
    root.setLevel(level)

    # 使用側： logging.info(json.dumps({"msg":"...", "request_id": rid}))

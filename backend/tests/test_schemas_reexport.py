from app import schemas as S


def test_schemas_reexport_ok():
    assert hasattr(S, "__all__")
    for name in S.__all__:
        getattr(S, name)  # 取得できればOK

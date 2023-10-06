import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_protobuf_createAssertEncode_ObjectGenericAlias =
    _test_protobuf_assertEncode("ObjectGenericAlias")<ObjectGenericAlias>(
        ObjectGenericAlias,
    )({
        encode: (input) =>
            typia.protobuf.assertEncode<ObjectGenericAlias>(input),
        decode: typia.protobuf.createDecode<ObjectGenericAlias>(),
        message: typia.protobuf.message<ObjectGenericAlias>(),
    });

import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_createValidateEncode_ObjectJsonTag =
    _test_protobuf_validateEncode("ObjectJsonTag")<ObjectJsonTag>(
        ObjectJsonTag,
    )({
        encode: (input) => typia.protobuf.validateEncode<ObjectJsonTag>(input),
        decode: typia.protobuf.createDecode<ObjectJsonTag>(),
        message: typia.protobuf.message<ObjectJsonTag>(),
    });

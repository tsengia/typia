import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_protobuf_createValidateEncode_ClassMethod =
    _test_protobuf_validateEncode("ClassMethod")<ClassMethod>(ClassMethod)({
        encode: typia.protobuf.createValidateEncode<ClassMethod>(),
        decode: typia.protobuf.createDecode<ClassMethod>(),
        message: typia.protobuf.message<ClassMethod>(),
    });

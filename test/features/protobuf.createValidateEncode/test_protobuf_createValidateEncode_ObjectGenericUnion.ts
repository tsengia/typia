import typia from "../../../src";
import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_protobuf_createValidateEncode_ObjectGenericUnion =
    _test_protobuf_validateEncode("ObjectGenericUnion")<ObjectGenericUnion>(
        ObjectGenericUnion,
    )({
        encode: typia.protobuf.createValidateEncode<ObjectGenericUnion>(),
        decode: typia.protobuf.createDecode<ObjectGenericUnion>(),
        message: typia.protobuf.message<ObjectGenericUnion>(),
    });

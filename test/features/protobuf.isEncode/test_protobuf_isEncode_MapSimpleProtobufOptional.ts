import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_protobuf_createIsEncode_MapSimpleProtobufOptional =
    _test_protobuf_isEncode(
        "MapSimpleProtobufOptional",
    )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)({
        encode: (input) =>
            typia.protobuf.isEncode<MapSimpleProtobufOptional>(input),
        decode: typia.protobuf.createDecode<MapSimpleProtobufOptional>(),
        message: typia.protobuf.message<MapSimpleProtobufOptional>(),
    });

import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_protobuf_createIsDecode_TypeTagRange =
    _test_protobuf_isDecode("TypeTagRange")<TypeTagRange>(TypeTagRange)({
        decode: (input) => typia.protobuf.isDecode<TypeTagRange>(input),
        encode: typia.protobuf.createEncode<TypeTagRange>(),
    });

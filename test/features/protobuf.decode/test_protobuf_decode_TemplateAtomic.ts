import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_createDecode_TemplateAtomic = _test_protobuf_decode(
    "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)({
    decode: (input) => typia.protobuf.decode<TemplateAtomic>(input),
    encode: typia.protobuf.createEncode<TemplateAtomic>(),
});

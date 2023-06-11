import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TagCustom } from "../../structures/TagCustom";

export const test_createValidateParse_TagCustom = _test_validateParse(
    "TagCustom",
    TagCustom.generate,
    typia.createValidateParse<TagCustom>(),
    TagCustom.SPOILERS,
);

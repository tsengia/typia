import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_isStringify_DynamicConstant = _test_isStringify(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.isStringify<DynamicConstant>(input),
    DynamicConstant.SPOILERS,
);

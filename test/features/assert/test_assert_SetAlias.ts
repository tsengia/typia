import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { SetAlias } from "../../structures/SetAlias";

export const test_assert_SetAlias = _test_assert("SetAlias")<SetAlias>(
    SetAlias,
)((input) => typia.assert<SetAlias>(input));

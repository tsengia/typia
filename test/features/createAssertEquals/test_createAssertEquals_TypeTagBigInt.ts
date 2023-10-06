import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_createAssertEquals_TypeTagBigInt = _test_assertEquals(
    "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)(typia.createAssertEquals<TypeTagBigInt>());

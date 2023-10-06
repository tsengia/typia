import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_assertEquals_TypeTagTypeUnion = _test_assertEquals(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)((input) =>
    typia.assertEquals<TypeTagTypeUnion>(input),
);

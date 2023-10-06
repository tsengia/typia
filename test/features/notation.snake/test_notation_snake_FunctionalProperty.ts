import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_notation_validateSnake_FunctionalProperty =
    _test_notation_validateGeneral("FunctionalProperty")<FunctionalProperty>(
        FunctionalProperty,
    )<typia.SnakeCase<FunctionalProperty>>({
        convert: (input) =>
            typia.notations.validateSnake<FunctionalProperty>(input),
        assert: typia.createAssert<typia.SnakeCase<FunctionalProperty>>(),
    });

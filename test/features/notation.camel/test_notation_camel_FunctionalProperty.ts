import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_notation_validateCamel_FunctionalProperty =
    _test_notation_validateGeneral("FunctionalProperty")<FunctionalProperty>(
        FunctionalProperty,
    )<typia.CamelCase<FunctionalProperty>>({
        convert: (input) =>
            typia.notations.validateCamel<FunctionalProperty>(input),
        assert: typia.createAssert<typia.CamelCase<FunctionalProperty>>(),
    });

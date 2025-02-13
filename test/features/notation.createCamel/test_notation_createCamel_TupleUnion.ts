import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_notation_createValidateCamel_TupleUnion =
    _test_notation_validateGeneral("TupleUnion")<TupleUnion>(TupleUnion)<
        typia.CamelCase<TupleUnion>
    >({
        convert: typia.notations.createValidateCamel<TupleUnion>(),
        assert: typia.createAssert<typia.CamelCase<TupleUnion>>(),
    });

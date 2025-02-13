import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_notation_createValidatePascal_TupleRestAtomic =
    _test_notation_validateGeneral("TupleRestAtomic")<TupleRestAtomic>(
        TupleRestAtomic,
    )<typia.PascalCase<TupleRestAtomic>>({
        convert: typia.notations.createValidatePascal<TupleRestAtomic>(),
        assert: typia.createAssert<typia.PascalCase<TupleRestAtomic>>(),
    });

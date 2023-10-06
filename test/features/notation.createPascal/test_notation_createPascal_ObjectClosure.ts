import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_notation_createValidatePascal_ObjectClosure =
    _test_notation_validateGeneral("ObjectClosure")<ObjectClosure>(
        ObjectClosure,
    )<typia.PascalCase<ObjectClosure>>({
        convert: typia.notations.createValidatePascal<ObjectClosure>(),
        assert: typia.createAssert<typia.PascalCase<ObjectClosure>>(),
    });

import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_createValidateStringify_ObjectHierarchical =
    _test_json_validateStringify("ObjectHierarchical")<ObjectHierarchical>(
        ObjectHierarchical,
    )(typia.json.createValidateStringify<ObjectHierarchical>());

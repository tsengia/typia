import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_createPrune_TupleRestObject = _test_misc_prune(
    "TupleRestObject",
)<TupleRestObject>(TupleRestObject)(typia.misc.createPrune<TupleRestObject>());

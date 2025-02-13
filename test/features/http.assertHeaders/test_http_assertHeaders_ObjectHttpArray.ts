import typia from "../../../src";
import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_assertHeaders_ObjectHttpArray = _test_http_assertHeaders(
    "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)((input) =>
    typia.http.assertHeaders<ObjectHttpArray>(input),
);

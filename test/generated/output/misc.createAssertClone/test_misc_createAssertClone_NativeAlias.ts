import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { NativeAlias } from "../../../structures/NativeAlias";

export const test_misc_createAssertClone_NativeAlias = _test_misc_assertClone(
    "NativeAlias",
)<NativeAlias>(NativeAlias)((input: any): typia.Resolved<NativeAlias> => {
    const assert = (input: any): NativeAlias => {
        const __is = (input: any): input is NativeAlias => {
            const $io0 = (input: any): boolean =>
                input.date instanceof Date &&
                input.uint8Array instanceof Uint8Array &&
                input.uint8ClampedArray instanceof Uint8ClampedArray &&
                input.uint16Array instanceof Uint16Array &&
                input.uint32Array instanceof Uint32Array &&
                input.bigUint64Array instanceof BigUint64Array &&
                input.int8Array instanceof Int8Array &&
                input.int16Array instanceof Int16Array &&
                input.int32Array instanceof Int32Array &&
                input.bigInt64Array instanceof BigInt64Array &&
                input.float32Array instanceof Float32Array &&
                input.float64Array instanceof Float64Array &&
                input.arrayBuffer instanceof ArrayBuffer &&
                input.sharedArrayBuffer instanceof SharedArrayBuffer &&
                input.dataView instanceof DataView;
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is NativeAlias => {
                const $guard = (typia.misc.createAssertClone as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (input.date instanceof Date ||
                        $guard(_exceptionable, {
                            path: _path + ".date",
                            expected: "Date",
                            value: input.date,
                        })) &&
                    (input.uint8Array instanceof Uint8Array ||
                        $guard(_exceptionable, {
                            path: _path + ".uint8Array",
                            expected: "Uint8Array",
                            value: input.uint8Array,
                        })) &&
                    (input.uint8ClampedArray instanceof Uint8ClampedArray ||
                        $guard(_exceptionable, {
                            path: _path + ".uint8ClampedArray",
                            expected: "Uint8ClampedArray",
                            value: input.uint8ClampedArray,
                        })) &&
                    (input.uint16Array instanceof Uint16Array ||
                        $guard(_exceptionable, {
                            path: _path + ".uint16Array",
                            expected: "Uint16Array",
                            value: input.uint16Array,
                        })) &&
                    (input.uint32Array instanceof Uint32Array ||
                        $guard(_exceptionable, {
                            path: _path + ".uint32Array",
                            expected: "Uint32Array",
                            value: input.uint32Array,
                        })) &&
                    (input.bigUint64Array instanceof BigUint64Array ||
                        $guard(_exceptionable, {
                            path: _path + ".bigUint64Array",
                            expected: "BigUint64Array",
                            value: input.bigUint64Array,
                        })) &&
                    (input.int8Array instanceof Int8Array ||
                        $guard(_exceptionable, {
                            path: _path + ".int8Array",
                            expected: "Int8Array",
                            value: input.int8Array,
                        })) &&
                    (input.int16Array instanceof Int16Array ||
                        $guard(_exceptionable, {
                            path: _path + ".int16Array",
                            expected: "Int16Array",
                            value: input.int16Array,
                        })) &&
                    (input.int32Array instanceof Int32Array ||
                        $guard(_exceptionable, {
                            path: _path + ".int32Array",
                            expected: "Int32Array",
                            value: input.int32Array,
                        })) &&
                    (input.bigInt64Array instanceof BigInt64Array ||
                        $guard(_exceptionable, {
                            path: _path + ".bigInt64Array",
                            expected: "BigInt64Array",
                            value: input.bigInt64Array,
                        })) &&
                    (input.float32Array instanceof Float32Array ||
                        $guard(_exceptionable, {
                            path: _path + ".float32Array",
                            expected: "Float32Array",
                            value: input.float32Array,
                        })) &&
                    (input.float64Array instanceof Float64Array ||
                        $guard(_exceptionable, {
                            path: _path + ".float64Array",
                            expected: "Float64Array",
                            value: input.float64Array,
                        })) &&
                    (input.arrayBuffer instanceof ArrayBuffer ||
                        $guard(_exceptionable, {
                            path: _path + ".arrayBuffer",
                            expected: "ArrayBuffer",
                            value: input.arrayBuffer,
                        })) &&
                    (input.sharedArrayBuffer instanceof SharedArrayBuffer ||
                        $guard(_exceptionable, {
                            path: _path + ".sharedArrayBuffer",
                            expected: "SharedArrayBuffer",
                            value: input.sharedArrayBuffer,
                        })) &&
                    (input.dataView instanceof DataView ||
                        $guard(_exceptionable, {
                            path: _path + ".dataView",
                            expected: "DataView",
                            value: input.dataView,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "NativeAlias",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "NativeAlias",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    };
    const clone = (input: NativeAlias): typia.Resolved<NativeAlias> => {
        const $co0 = (input: any): any => ({
            date:
                input.date instanceof Date
                    ? new Date(input.date)
                    : (input.date as any),
            uint8Array:
                input.uint8Array instanceof Uint8Array
                    ? new Uint8Array(input.uint8Array)
                    : (input.uint8Array as any),
            uint8ClampedArray:
                input.uint8ClampedArray instanceof Uint8ClampedArray
                    ? new Uint8ClampedArray(input.uint8ClampedArray)
                    : (input.uint8ClampedArray as any),
            uint16Array:
                input.uint16Array instanceof Uint16Array
                    ? new Uint16Array(input.uint16Array)
                    : (input.uint16Array as any),
            uint32Array:
                input.uint32Array instanceof Uint32Array
                    ? new Uint32Array(input.uint32Array)
                    : (input.uint32Array as any),
            bigUint64Array:
                input.bigUint64Array instanceof BigUint64Array
                    ? new BigUint64Array(input.bigUint64Array)
                    : (input.bigUint64Array as any),
            int8Array:
                input.int8Array instanceof Int8Array
                    ? new Int8Array(input.int8Array)
                    : (input.int8Array as any),
            int16Array:
                input.int16Array instanceof Int16Array
                    ? new Int16Array(input.int16Array)
                    : (input.int16Array as any),
            int32Array:
                input.int32Array instanceof Int32Array
                    ? new Int32Array(input.int32Array)
                    : (input.int32Array as any),
            bigInt64Array:
                input.bigInt64Array instanceof BigInt64Array
                    ? new BigInt64Array(input.bigInt64Array)
                    : (input.bigInt64Array as any),
            float32Array:
                input.float32Array instanceof Float32Array
                    ? new Float32Array(input.float32Array)
                    : (input.float32Array as any),
            float64Array:
                input.float64Array instanceof Float64Array
                    ? new Float64Array(input.float64Array)
                    : (input.float64Array as any),
            arrayBuffer:
                input.arrayBuffer instanceof ArrayBuffer
                    ? (() => {
                          const buffer = new ArrayBuffer(
                              input.arrayBuffer.byteLength,
                          );
                          new Uint8Array(buffer).set(
                              new Uint8Array(input.arrayBuffer),
                          );
                          return buffer;
                      })()
                    : (input.arrayBuffer as any),
            sharedArrayBuffer:
                input.sharedArrayBuffer instanceof SharedArrayBuffer
                    ? (() => {
                          const buffer = new SharedArrayBuffer(
                              input.sharedArrayBuffer.byteLength,
                          );
                          new Uint8Array(buffer).set(
                              new Uint8Array(input.sharedArrayBuffer),
                          );
                          return buffer;
                      })()
                    : (input.sharedArrayBuffer as any),
            dataView:
                input.dataView instanceof DataView
                    ? new DataView(input.dataView.buffer)
                    : (input.dataView as any),
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    };
    assert(input);
    const output = clone(input);
    return output;
});

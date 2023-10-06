import typia from "../../../../src";
import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_protobuf_createIsDecode_TemplateAtomic =
    _test_protobuf_isDecode("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)({
        decode: (input: Uint8Array): typia.Resolved<TemplateAtomic> | null => {
            const is = (input: any): input is TemplateAtomic => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.prefix &&
                    RegExp(/^prefix_(.*)/).test(input.prefix) &&
                    "string" === typeof input.postfix &&
                    RegExp(/(.*)_postfix$/).test(input.postfix) &&
                    "string" === typeof input.middle_string &&
                    RegExp(/^the_(.*)_value$/).test(input.middle_string) &&
                    "string" === typeof input.middle_string_empty &&
                    RegExp(/^the_(.*)_value$/).test(
                        input.middle_string_empty,
                    ) &&
                    "string" === typeof input.middle_numeric &&
                    RegExp(
                        /^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/,
                    ).test(input.middle_numeric) &&
                    ("the_false_value" === input.middle_boolean ||
                        "the_true_value" === input.middle_boolean) &&
                    "string" === typeof input.ipv4 &&
                    RegExp(
                        /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\.[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                    ).test(input.ipv4) &&
                    "string" === typeof input.email &&
                    RegExp(/(.*)@(.*)\.(.*)/).test(input.email);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const decode = (
                input: Uint8Array,
            ): typia.Resolved<TemplateAtomic> => {
                const $Reader = (typia.protobuf.createIsDecode as any).Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        prefix: undefined as any,
                        postfix: undefined as any,
                        middle_string: undefined as any,
                        middle_string_empty: undefined as any,
                        middle_numeric: undefined as any,
                        middle_boolean: undefined as any,
                        ipv4: undefined as any,
                        email: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                // string;
                                output.prefix = reader.string();
                                break;
                            case 2:
                                // string;
                                output.postfix = reader.string();
                                break;
                            case 3:
                                // string;
                                output.middle_string = reader.string();
                                break;
                            case 4:
                                // string;
                                output.middle_string_empty = reader.string();
                                break;
                            case 5:
                                // string;
                                output.middle_numeric = reader.string();
                                break;
                            case 6:
                                // string;
                                output.middle_boolean = reader.string();
                                break;
                            case 7:
                                // string;
                                output.ipv4 = reader.string();
                                break;
                            case 8:
                                // string;
                                output.email = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const reader = new $Reader(input);
                return $pdo0(reader);
            };
            const output = decode(input);
            if (!is(output)) return null;
            return output;
        },
        encode: (input: TemplateAtomic): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "prefix";
                    writer.uint32(10);
                    writer.string(input.prefix);
                    // property "postfix";
                    writer.uint32(18);
                    writer.string(input.postfix);
                    // property "middle_string";
                    writer.uint32(26);
                    writer.string(input.middle_string);
                    // property "middle_string_empty";
                    writer.uint32(34);
                    writer.string(input.middle_string_empty);
                    // property "middle_numeric";
                    writer.uint32(42);
                    writer.string(input.middle_numeric);
                    // property "middle_boolean";
                    writer.uint32(50);
                    writer.string(input.middle_boolean);
                    // property "ipv4";
                    writer.uint32(58);
                    writer.string(input.ipv4);
                    // property "email";
                    writer.uint32(66);
                    writer.string(input.email);
                };
                //TemplateAtomic;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });

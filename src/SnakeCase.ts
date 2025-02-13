/**
 * Snake case type.
 *
 * `SnakeCase` type is a type that all keys of an object are converted to snake case.
 *
 * It also erase every method properties like {@link Resolved} type.
 *
 * @template T Target type to be snake cased
 * @author Jeongho Nam - https://github.com/samchon
 */
export type SnakeCase<T> = Equal<T, SnakageMain<T>> extends true
    ? T
    : SnakageMain<T>;

/* -----------------------------------------------------------
    OBJECT CONVERSION
----------------------------------------------------------- */
type Equal<X, Y> = X extends Y ? (Y extends X ? true : false) : false;

type SnakageMain<T> = T extends [never]
    ? never // special trick for (jsonable | null) type
    : T extends { valueOf(): boolean | bigint | number | string }
    ? ValueOf<T>
    : T extends Function
    ? never
    : T extends object
    ? SnakageObject<T>
    : T;

type SnakageObject<T extends object> = T extends Array<infer U>
    ? IsTuple<T> extends true
        ? SnakageTuple<T>
        : SnakageMain<U>[]
    : T extends Set<infer U>
    ? Set<SnakageMain<U>>
    : T extends Map<infer K, infer V>
    ? Map<SnakageMain<K>, SnakageMain<V>>
    : T extends WeakSet<any> | WeakMap<any, any>
    ? never
    : T extends
          | Date
          | Uint8Array
          | Uint8ClampedArray
          | Uint16Array
          | Uint32Array
          | BigUint64Array
          | Int8Array
          | Int16Array
          | Int32Array
          | BigInt64Array
          | Float32Array
          | Float64Array
          | ArrayBuffer
          | SharedArrayBuffer
          | DataView
    ? T
    : {
          [Key in keyof T as SnakageString<Key & string>]: SnakageMain<T[Key]>;
      };

/* -----------------------------------------------------------
    SPECIAL CASES
----------------------------------------------------------- */
type IsTuple<T extends readonly any[] | { length: number }> = [T] extends [
    never,
]
    ? false
    : T extends readonly any[]
    ? number extends T["length"]
        ? false
        : true
    : false;
type SnakageTuple<T extends readonly any[]> = T extends []
    ? []
    : T extends [infer F]
    ? [SnakageMain<F>]
    : T extends [infer F, ...infer Rest extends readonly any[]]
    ? [SnakageMain<F>, ...SnakageTuple<Rest>]
    : T extends [(infer F)?]
    ? [SnakageMain<F>?]
    : T extends [(infer F)?, ...infer Rest extends readonly any[]]
    ? [SnakageMain<F>?, ...SnakageTuple<Rest>]
    : [];

type ValueOf<Instance> = IsValueOf<Instance, Boolean> extends true
    ? boolean
    : IsValueOf<Instance, Number> extends true
    ? number
    : IsValueOf<Instance, String> extends true
    ? string
    : Instance;

type IsValueOf<Instance, Object extends IValueOf<any>> = Instance extends Object
    ? Object extends IValueOf<infer Primitive>
        ? Instance extends Primitive
            ? false
            : true // not Primitive, but Object
        : false // cannot be
    : false;

interface IValueOf<T> {
    valueOf(): T;
}

/* -----------------------------------------------------------
    STRING CONVERTER
----------------------------------------------------------- */
type SnakageString<Key extends string> = Key extends `${infer _}`
    ? SnakageStringRepeatedly<Key, "">
    : Key;
type SnakageStringRepeatedly<
    S extends string,
    Previous extends string,
> = S extends `${infer First}${infer Second}${infer Rest}`
    ? `${Underscore<Previous, First>}${Lowercase<First>}${Underscore<
          First,
          Second
      >}${Lowercase<Second>}${SnakageStringRepeatedly<Rest, Second>}`
    : S extends `${infer First}`
    ? `${Underscore<Previous, First>}${Lowercase<First>}`
    : "";
type Underscore<First extends string, Second extends string> = First extends
    | UpperAlphabetic
    | ""
    | "_"
    ? ""
    : Second extends UpperAlphabetic
    ? "_"
    : "";
type UpperAlphabetic =
    | "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | "H"
    | "I"
    | "J"
    | "K"
    | "L"
    | "M"
    | "N"
    | "O"
    | "P"
    | "Q"
    | "R"
    | "S"
    | "T"
    | "U"
    | "V"
    | "W"
    | "X"
    | "Y"
    | "Z";

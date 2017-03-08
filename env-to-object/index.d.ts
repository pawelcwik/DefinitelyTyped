// Type definitions for env-to-object 1.1
// Project: https://github.com/kgryte/node-env-to-object#readme
// Definitions by: TANAKA Koichi <https://github.com/MugeSo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace env {
    export interface Mappings {
        [enviromentVariableName: string]: Mapping;
    }

    export type Mapping = IntegerMapping | BooleanMapping | GenericMapping;

    interface GenericMapping {
        keypath: string;
        type?: string;
        [opt: string]: any;
    }

    interface IntegerMapping extends GenericMapping {
        type: "integer";
        radix: number;
    }

    interface BooleanMapping {
        type: "boolean";
        strict: boolean;
    }

    export interface Parsers {
        [parserName: string]: (str: string, opts: any) => any;
    }

    export interface Options {
        parsers: Parsers;
    }
}

declare  function env(map: env.Mappings, options?: env.Options): any;
export = env;

import { KEnv } from "./env";
import { KArgv } from "./argv";
import { requiredConfigName } from "./tools/requiredConfig";

export const production = KEnv.mode === "production";
export const development = KEnv.mode === "development";
export const configName = requiredConfigName();
// is a declarative fetch, allowing you to force the
// browser to make a request for a resource without blocking the document's onload event.
export const preload = KArgv.parsedArgv.preload || false;
export const prefetch = ["**/*.js"]; // browser to request that item and store it in the cache for reference later.
export const analyze = KArgv.parsedArgv.analyze || false;
export const release =
    KArgv.parsedArgv.release || KArgv.parsedArgv.analyze || false;
export const hashName = production
    ? "[name].[chunkhash:6].[id]"
    : "[name].[fullhash:6].[id]";

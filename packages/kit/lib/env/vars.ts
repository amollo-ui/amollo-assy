import { existsSync } from "fs";
import { KWsPaths } from "../paths";
import { KArgv } from "../argv";
import { getDotEnvConfig } from "./envConfig";

export namespace KEnv {
    export const mode = process.env.NODE_ENV || "development";
    export const isModern = process.env.BROWSERS_ENV === "modern";
    const existsDotEnv = existsSync(KWsPaths.wsDotEnvPath);
    const config =
        KArgv.parsedArgs?.config === "build"
            ? "build"
            : KArgv.parsedArgs?.config === "start"
            ? "start"
            : "";
    const requiredEnv = ["start", "build"].includes(config || KArgv.script);

    if (!existsDotEnv && requiredEnv) {
        // TODO: errors in separate instances
        throw new Error(`.env file not found in package`);
    }

    export const vars = getDotEnvConfig(requiredEnv, existsDotEnv);
}

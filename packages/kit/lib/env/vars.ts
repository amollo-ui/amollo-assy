import { existsSync } from "fs";
import dotenv, { type DotenvParseOutput } from "dotenv";
import { KWsPaths } from "../paths";
import { KArgv } from "../argv";

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

interface IEnv {
    [key: string]: unknown;
    areaEnv?: Record<string, unknown> | DotenvParseOutput;
    envPublicUrl: string;
}

export const env: IEnv = {
    envPublicUrl: "",
};

if (requiredEnv && existsDotEnv) {
    // Parses the file of the area variable (.env. *) and returns in the "parsed"
    // key an object that contains the values of the area variables that we set
    const configOutput = dotenv.config({
        "path": KWsPaths.wsDotEnvPath,
    });
    // eslint-disable-next-line prefer-const
    let { parsed } = configOutput;

    if (configOutput.error)
        throw new Error("An error occurred while calling dotenv.config");
    if (!parsed) (parsed as unknown as NodeJS.ProcessEnv) = process.env;
    if (parsed && !parsed.PORT) {
        parsed.PORT = parsed.PORT || parsed.REACT_APP_PORT || "3000";
    }

    // Webpack uses `publicPath` to determine where the app is being served from.
    // It requires a trailing slash, or the file assets will get an incorrect path.
    // In development, we always serve from the root. This makes config easier.
    const envPublicUrl = parsed?.PUBLIC_URL || "/";

    env["areaEnv"] = parsed;
    env["envPublicUrl"] = envPublicUrl;
} else {
    const envPublicUrl = process.env.PUBLIC_URL || "/";

    env["envPublicUrl"] = envPublicUrl;
    env["areaEnv"] = {};
}

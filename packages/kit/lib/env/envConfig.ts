import dotenv, { type DotenvParseOutput } from "dotenv";
import { KWsPaths } from "../paths";
import { Port } from "webpack-dev-server";

export interface IEnv {
    dotEnv?: Record<string, unknown> | DotenvParseOutput;
    publicUrl: string;
    port: Port;
}

export const getDotEnvConfig = (
    requiredEnv: boolean,
    existsDotEnv: boolean
): IEnv => {
    const config: IEnv = {
        publicUrl: "",
        port: 3000,
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
        if (parsed && (parsed.PORT || parsed.REACT_APP_PORT)) {
            config.port = parsed.PORT || parsed.REACT_APP_PORT;
        }

        // Webpack uses `publicPath` to determine where the app is being served from.
        // It requires a trailing slash, or the file assets will get an incorrect path.
        // In development, we always serve from the root. This makes config easier.
        const publicUrl = parsed?.PUBLIC_URL || "/";

        config["dotEnv"] = parsed;
        config["publicUrl"] = publicUrl;
    } else {
        const publicUrl = process.env.PUBLIC_URL || "/";

        config["publicUrl"] = publicUrl;
        config["dotEnv"] = {};
    }

    return config;
};

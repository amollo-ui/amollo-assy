import { KArgv } from "../argv";
import { KEnv } from "../env";

export const requiredConfigName = (): "development" | "production" | "ssg" => {
    let config = KArgv.parsedArgs?.config;
    const validValues = ["development", "production", "ssg"];

    if (!config) {
        config = KEnv.mode;
    }

    if (typeof config !== "string") {
        throw new Error("--config property of string type not configured");
    }

    if (!validValues.includes(config)) {
        throw new Error(
            "--config value must be one from the list ['development', 'production', 'ssg']"
        );
    }

    return config as "development" | "production" | "ssg";
};

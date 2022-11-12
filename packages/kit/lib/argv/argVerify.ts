import chalk from "chalk";
import verifyMarkdown from "./verify/verifyMarkdown";
import { configName } from "../options";
import { parsedArgs } from "./arguments";
import type { Configuration } from "webpack";

const getVerifyName = () => {
    if (parsedArgs?.md) {
        return "markdown";
    }

    return configName;
};

export const verify = (config: Configuration) => {
    const verifyName = getVerifyName() || config.name;

    if (verifyName === "markdown") verifyMarkdown();
};

const checkLegalConfigValue = (value: string) => {
    const legalConfigValues = ["development", "production", "ssg"];
    const isInclude = legalConfigValues.includes(value);

    if (!isInclude) {
        throw new Error(
            chalk.red(
                `The value ${value} is not valid for the argument --config. Please enter value from the list [${legalConfigValues.join(
                    ", "
                )}]`
            )
        );
    }
};

export const verifyArgs = () => {
    // TODO: convert to object and iterate with fields
    // ex. [{ "arg": "config", legalValues: ["development", "production", "ssg"], }]
    // TODO: add analysis arguments
    const legalArgs = ["config", "md", "root-path", "ts-config"];

    parsedArgs &&
        Object.keys(parsedArgs).forEach(arg => {
            const isIncludeValidArg = legalArgs.includes(arg);

            if (!isIncludeValidArg) {
                throw new Error(
                    chalk.red(
                        `Argument ${arg} is not supported by webpack-react. Please enter arguments from the list [${legalArgs.join(
                            ", "
                        )}]`
                    )
                );
            }

            if (arg === "config" && parsedArgs) {
                checkLegalConfigValue(String(parsedArgs[arg]));
            }
        });
};

/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
import { existsSync } from "fs";
import { merge } from "webpack-merge";
import { KOptions, KWsPaths } from "@amollo-assy/kit";
import commonConfig from "./common.config";
import type { Configuration } from "webpack";

const applyConfig = (): Configuration => {
    const config: Configuration =
        require(`./${KOptions.configName}.config`).default;
    let mergeConfig: Configuration = {},
        wsConfig: Configuration = {};

    if (existsSync(KWsPaths.wsConfigPath))
        wsConfig = require(KWsPaths.wsConfigPath);

    mergeConfig = merge<Configuration>(commonConfig, config, wsConfig);

    return mergeConfig;
};

export default applyConfig;

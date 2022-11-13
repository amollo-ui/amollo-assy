import { join } from "path";
import forkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { KWsPaths } from "@amollo-assy/kit";

/**
 * @see https://www.npmjs.com/package/fork-ts-checker-webpack-plugin
 */
export default () => [
    new forkTsCheckerWebpackPlugin({
        "formatter": "basic",
        "typescript": {
            "configFile": join(KWsPaths.wsDirRootPath, "tsconfig.json"),
            "context": KWsPaths.wsDirRootPath,
        },
    }),
];

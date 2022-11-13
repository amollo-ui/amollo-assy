import { join } from "path";
import ESLintWebpackPlugin from "eslint-webpack-plugin";
import { KOptions, KWsPaths } from "@amollo-assy/kit";

/**
 * @see https://www.robinwieruch.de/webpack-eslint/
 */
export default () => [
    new ESLintWebpackPlugin({
        "files": `${KWsPaths.wsDirSourcePath}/**/*.{ts,tsx}`,
        "fix": KOptions.development,
        "overrideConfigFile": join(KWsPaths.wsDirRootPath, ".eslintrc.js"),
    }),
];

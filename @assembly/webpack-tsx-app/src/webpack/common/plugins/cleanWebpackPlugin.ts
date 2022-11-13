import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { KArgv, KWsPaths } from "@amollo-assy/kit";

/**
 * All files inside webpack's output.path directory will be removed once, but the
 * directory itself will not be. If using webpack 4+'s default configuration,
 * everything under <PROJECT_DIR>/dist/ will be removed.
 * Use cleanOnceBeforeBuildPatterns to override this behavior.
 *
 * During rebuilds, all webpack assets that are not used anymore
 * will be removed automatically.
 */
export default () => {
    if (KArgv.parsedArgs) {
        const { config, md } = KArgv.parsedArgs;

        if (KArgv.script === "build" && md && config !== "ssg") {
            return [];
        }
    }

    return [
        new CleanWebpackPlugin({
            "cleanOnceBeforeBuildPatterns": [KWsPaths.wsDirBuildPath],
        }),
    ];
};

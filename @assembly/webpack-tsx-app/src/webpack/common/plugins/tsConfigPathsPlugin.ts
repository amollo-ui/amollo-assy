import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { KWsPaths } from "@amollo-assy/kit";

export default () => {
    return [
        new TsconfigPathsPlugin({
            "configFile": "tsconfig.json",
            "baseUrl": KWsPaths.wsDirRootPath,
        }),
    ];
};

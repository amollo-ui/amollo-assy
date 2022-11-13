import CopyWepbackPlugin from "copy-webpack-plugin";
import { KWsPaths } from "@amollo-assy/kit";

/**
 * Copies individual files or entire directories, which already exist, to the build directory.
 */
export default () => [
    new CopyWepbackPlugin({
        "patterns": [
            {
                "noErrorOnMissing": true,
                "from": KWsPaths.wsDirPublicPath,
                "to": KWsPaths.wsDirBuildPath,
                "globOptions": {
                    "ignore": ["**/public/static/**", "**/public/assets/**"],
                },
            },
        ],
    }),
];

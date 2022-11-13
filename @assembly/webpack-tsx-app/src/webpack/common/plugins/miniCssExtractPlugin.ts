import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { KOptions } from "@amollo-assy/kit";

/**
 * This plugin extracts CSS into separate files. It creates a CSS file
 * per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
 */
export default () => [
    new MiniCssExtractPlugin({
        "ignoreOrder": false,
        "chunkFilename": KOptions.development
            ? "styles/[name].css"
            : "styles/[name].[chunkhash].css",
        "filename": KOptions.development
            ? "styles/[name].css"
            : "styles/[name].[contenthash].css",
    }),
];

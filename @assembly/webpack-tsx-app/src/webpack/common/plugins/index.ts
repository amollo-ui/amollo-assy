import copyWebpackPlugin from "./copyWebpackPlugin";
import webpackBundleAnalyzer from "./webpackBundleAnalyzer";
import caseSensitivePathsWebpackPlugin from "./caseSensitivePathsWebpackPlugin";
import forkTsCheckerWebpackPlugin from "./forkTsCheckerWebpackPlugin";
import webpackPlugins from "./webpackPlugins";
import cleanWebpackPlugin from "./cleanWebpackPlugin";
import miniCssExtractPlugin from "./miniCssExtractPlugin";
import { htmlWebpackPlugin } from "../../../../lib/webpack/plugins/core";
import type { Configuration } from "webpack";

const plugins: Configuration = {
    "plugins": [
        ...copyWebpackPlugin(),
        ...forkTsCheckerWebpackPlugin(),
        ...cleanWebpackPlugin(),
        ...webpackBundleAnalyzer(),
        ...caseSensitivePathsWebpackPlugin(),
        ...webpackPlugins(),
        ...miniCssExtractPlugin(),
        ...htmlWebpackPlugin(),
    ].filter(Boolean),
};

export default plugins;

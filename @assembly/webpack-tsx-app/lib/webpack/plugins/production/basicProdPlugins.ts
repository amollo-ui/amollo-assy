import webpackBar from "./webpackBar";
import webpackPlugins from "./webpackPlugins";
// import workboxWebpackPlugin from "./workboxWebpackPlugin";
import type { Configuration } from "webpack";

const basicProdPlugins: Configuration["plugins"] = [
    ...webpackBar(),
    ...webpackPlugins(),
    // ...workboxWebpackPlugin(),
].filter(Boolean);

export default basicProdPlugins;

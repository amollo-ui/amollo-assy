import precacheSsgManifestPlugin from "./precacheSsgManifestPlugin";
import redirectWebpackPlugin from "./redirectWebpackPlugin";
import ssgWebpackPlugin from "./ssgWebpackPlugin";
import { Plugins } from "@amollo-assy/webpack-tsx-app";
import type { Configuration } from "webpack";

const plugins: Configuration = {
    "plugins": [
        ...precacheSsgManifestPlugin(),
        ...redirectWebpackPlugin(),
        ...ssgWebpackPlugin(),
        ...Plugins.Core.webpackPwaManifest(),
    ].filter(Boolean),
};

export default plugins;

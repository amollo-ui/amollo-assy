import { KArgv } from "@amollo-assy/kit";
import { Plugins } from "@amollo-assy/webpack-tsx-app";
import provideAssetsPlugin from "../../core/plugins/provideAssetsPlugin";
import type { Configuration, WebpackPluginInstance } from "webpack";

const plugins: Configuration["plugins"] = [
    ...Plugins.Core.htmlWebpackPlugin(),
].filter(Boolean);

if (KArgv.parsedArgs?.md) {
    plugins.push(...provideAssetsPlugin());
}

if (KArgv.parsedArgs?.config !== "ssg" && KArgv.script === "build") {
    plugins.push(
        ...(Plugins.Core.webpackPwaManifest() as Array<WebpackPluginInstance>)
    );
}

export default { plugins };

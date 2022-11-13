import { KArgv } from "@amollo-assy/kit";
import { Plugins } from "../../../../lib";
import type { Configuration, WebpackPluginInstance } from "webpack";

const plugins: Configuration["plugins"] = Plugins.Prod.basicProdPlugins;

if (KArgv.script === "build") {
    plugins?.push(
        ...(Plugins.Core.webpackPwaManifest() as Array<WebpackPluginInstance>)
    );
}

export default { plugins };

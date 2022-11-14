import executiveAssets from "../../../utils/executiveAssets";
import type { Compiler } from "webpack";

class ProvideAssetsPlugin {
    public apply(compiler: Compiler): void {
        compiler.hooks.done.tap("ProvideAssetsPlugin", stats => {
            const assets = Object.keys(stats.compilation.assets);
            const jsmodules = assets.filter(
                item => item.startsWith("js/") && item.endsWith(".m.js")
            );
            const cssmodules = assets.filter(item =>
                item.startsWith("styles/")
            );

            executiveAssets({ jsmodules, cssmodules });
        });
    }
}

export default () => [new ProvideAssetsPlugin()];

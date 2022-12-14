import { Compilation, sources, type Compiler } from "webpack";
import { getManifestEntriesFromCompilation } from "workbox-webpack-plugin/build/lib/get-manifest-entries-from-compilation";

// TODO: need to precache some assets from ssg too
// they're previously handled by
// require('/utils/find-files-in-dist')(['.css', '.ico', '.svg'])
class PrecacheSsgManifestPlugin {
    public apply(compiler: Compiler): void {
        compiler.hooks.thisCompilation.tap(
            "PrecacheSsgManifestPlugin",
            compilation => {
                compilation.hooks.processAssets.tapPromise(
                    {
                        "name": "PrecacheSsgManifestPlugin",
                        "stage":
                            Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER -
                            10,
                    },
                    async () => {
                        const { sortedEntries } =
                            await getManifestEntriesFromCompilation(
                                compilation,
                                {
                                    // we don't want to include all html pages
                                    // as that would take too many storages
                                    // svg excluded as it's already included with InjectManifest
                                    "include": [/\.(ico|css)/i, /app-shell/i],
                                }
                            );
                        compilation.emitAsset(
                            "ssg-manifest.json",
                            new sources.RawSource(JSON.stringify(sortedEntries))
                        );
                    }
                );
            }
        );
    }
}

export default () => [new PrecacheSsgManifestPlugin()];

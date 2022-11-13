import { join } from "path";
import { KWsPaths, KPathUtils } from "@amollo-assy/kit";
import { LPaths } from "../../../paths/localPaths";
import type { Configuration } from "webpack";

const getAbsolutePath = KPathUtils.getAbsolutePath(KWsPaths.wsDirRootPath);

// Cache the generated webpack modules and chunks to improve build speed.
// cache is set to type: 'memory' in development mode and disabled in production mode.
const cache: Configuration = {
    "cache": {
        // 'memory' | 'filesystem'
        // Sets the cache type to either in memory or on the file system.
        // The memory option is straightforward, it tells webpack to store
        // cache in memory and doesn't allow additional configuration.
        // While setting cache.type to filesystem opens up more options for configuration.
        "type": "filesystem",
        // cache.buildDependencies is an object of arrays of additional code dependencies
        // for the build. webpack will use a hash of each of these items and all dependencies
        // to invalidate the filesystem cache.
        "buildDependencies": {
            // This makes all dependencies of this file - build dependencies
            "config": [
                getAbsolutePath(
                    join(LPaths.ownDirConfigsPath, "common.config.js")
                ),
            ],
        },
        // Base directory for the cache. Defaults to node_modules/.cache/webpack.
        "cacheDirectory": `${KWsPaths.wsDirCachePath}/webpack`,
    },
};

export default cache;

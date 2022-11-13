import type { Configuration } from "webpack";

// These options allows you to control how webpack notifies you of
// assets and entry points that exceed a specific file limit.
const performance: Configuration = {
    "performance": {
        "hints": "warning",
        "maxAssetSize": 500000,
        "maxEntrypointSize": 500000,
        "assetFilter": (assetFilename: string): boolean =>
            !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
    },
};

export default performance;

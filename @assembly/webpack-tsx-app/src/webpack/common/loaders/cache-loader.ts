import { KWsPaths } from "@amollo-assy/kit";

export default () => ({
    "loader": "cache-loader",
    "options": {
        "cacheDirectory": KWsPaths.wsDirCachePath,
    },
});

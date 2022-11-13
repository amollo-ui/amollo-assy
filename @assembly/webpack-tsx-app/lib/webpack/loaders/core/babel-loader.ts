import { KWsPaths } from "@amollo-assy/kit";

export default () => ({
    "loader": "babel-loader",
    "options": {
        "cacheDirectory": KWsPaths.wsDirCachePath,
    },
});

import tsConfigPathsPlugin from "../plugins/tsConfigPathsPlugin";
import alias from "../options/alias";
import type { Configuration } from "webpack";

// These options change how modules are resolved. webpack provides reasonable defaults,
// but it is possible to change the resolving in detail
const resolve: Configuration = {
    "resolve": {
        alias,
        "mainFiles": ["index"],
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".json"],
        "plugins": [...tsConfigPathsPlugin()].filter(Boolean),
        "fallback": {
            // https://www.npmjs.com/package/path-browserify
            "path": require.resolve("path-browserify"),
        },
    },
};

export default resolve;

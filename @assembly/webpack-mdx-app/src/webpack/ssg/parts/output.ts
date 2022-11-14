import type { Configuration } from "webpack";

const output: Configuration = {
    "output": {
        "filename": ".server/[name].[contenthash].js",
        "libraryTarget": "umd",
    },
};

export default output;

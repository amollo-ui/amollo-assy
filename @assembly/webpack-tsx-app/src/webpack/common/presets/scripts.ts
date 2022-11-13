import { KOptions } from "@amollo-assy/kit";
import sourceMapLoader from "../loaders/sourcemap-loader";
import { Core } from "../../../../lib/webpack/loaders";
import cacheLoader from "../loaders/cache-loader";
// import nullLoader from "../loaders/null-loader";
// TODO: Test profit
import threadLoader from "../loaders/thread-loader";
import type { RuleSetRule } from "webpack";

const scriptRules = (): Array<RuleSetRule> => [
    {
        "test": /\.(ts)x?$/,
        "use": "ts-loader",
        "exclude": /node_modules/,
    },
    {
        "test": /\.(js)x?$/,
        "enforce": "pre",
        "exclude": /(node_modules)/,
        "use": [sourceMapLoader()],
    },
    {
        "test": /\.(js)x?$/,
        "exclude": /node_modules/,
        "use": [
            ...(KOptions.development ? [cacheLoader()] : []),
            threadLoader({ name: "js" }),
            Core.babelLoader(),
        ],
    },
    // {
    //     "test": /\.js?$/,
    //     "include": [].map(fileName => resolve(`node_modules/.../${fileName}`)),
    //     "use": [
    //         nullLoader(),
    //     ],
    // },
];

export default scriptRules;

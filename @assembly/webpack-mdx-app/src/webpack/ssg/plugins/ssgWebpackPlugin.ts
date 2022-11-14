import SSGWebpackPlugin from "static-site-generator-webpack-plugin";
import raf from "raf";
import { KWsPaths } from "@amollo-assy/kit";
import flattenContentTree from "../../../utils/flattenContentTree";

// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const contentTree = require(KWsPaths.wsContentJsonPath);
const paths = [...flattenContentTree(contentTree)];

export default () => [
    new SSGWebpackPlugin({
        "globals": {
            "window": {
                "__ssgrun": true,
                "requestAnimationFrame": raf, // requestAnimationFrame polyfill for node [e.g use: react-spring].
            },
        },
        paths,
        "locals": {
            "content": contentTree,
        },
    }),
];

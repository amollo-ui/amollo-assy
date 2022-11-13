import hotModuleReplacementPlugin from "./hotModuleReplacementPlugin";
import friendlyErrorsWebpackPlugin from "./friendlyErrorsWebpackPlugin";
import type { Configuration } from "webpack";

const plugins: Configuration = {
    "plugins": [
        ...hotModuleReplacementPlugin(),
        ...friendlyErrorsWebpackPlugin(),
    ].filter(Boolean),
};

export default plugins;

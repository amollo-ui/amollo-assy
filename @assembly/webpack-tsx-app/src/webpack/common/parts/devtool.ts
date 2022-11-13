import { KOptions } from "@amollo-assy/kit";
import type { Configuration } from "webpack";

// This option controls if and how source maps are generated.
const devtool: Configuration = {
    "devtool": KOptions.production ? false : "eval-source-map", // or eval-cheap-module-source-map
};

export default devtool;

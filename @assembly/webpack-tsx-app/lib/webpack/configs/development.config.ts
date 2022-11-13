import { merge } from "webpack-merge";
import type { Configuration } from "webpack";

import entry from "../../../src/webpack/development/parts/entry";
import externalsPresets from "../../../src/webpack/development/parts/externalsPresets";
import externalsType from "../../../src/webpack/development/parts/externalsType";
import plugins from "../../../src/webpack/development/plugins";

export default merge<Configuration>(
    entry,
    plugins,
    externalsPresets,
    externalsType
);

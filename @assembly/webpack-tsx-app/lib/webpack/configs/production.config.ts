import { merge } from "webpack-merge";
import type { Configuration } from "webpack";

import bail from "../../../src/webpack/production/parts/bail";
import performance from "../../../src/webpack/production/parts/performance";
import optimization from "../../../src/webpack/production/parts/optimization";
import entry from "../../../src/webpack/production/parts/entry";
import { Prod } from "../plugins";

export default merge<Configuration>(
    entry,
    bail,
    performance,
    { plugins: Prod.basicProdPlugins },
    optimization
);

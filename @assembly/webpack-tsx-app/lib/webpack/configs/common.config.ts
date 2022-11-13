import { merge } from "webpack-merge";
import type { Configuration } from "webpack";

import mode from "../../../src/webpack/common/parts/mode";
import name from "../../../src/webpack/common/parts/name";
import node from "../../../src/webpack/common/parts/node";
import cache from "../../../src/webpack/common/parts/cache";
import output from "../../../src/webpack/common/parts/output";
import modules from "../../../src/webpack/common/parts/module";
import context from "../../../src/webpack/common/parts/context";
import devtool from "../../../src/webpack/common/parts/devtool";
import resolve from "../../../src/webpack/common/parts/resolve";
import externals from "../../../src/webpack/common/parts/externals";
import target from "../../../src/webpack/common/parts/target";
import experiments from "../../../src/webpack/common/parts/experiments";
import plugins from "../../../src/webpack/common/plugins";

export default merge<Configuration>(
    mode,
    name,
    cache,
    context,
    output,
    modules,
    node,
    devtool,
    externals,
    plugins,
    resolve,
    target,
    experiments
);

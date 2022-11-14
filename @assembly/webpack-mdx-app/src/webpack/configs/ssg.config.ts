import { merge } from "webpack-merge";
import type { Configuration } from "webpack";

import entry from "../ssg/parts/entry";
import output from "../ssg/parts/output";
import optimization from "../ssg/parts/optimization";
import target from "../ssg/parts/target";
import plugins from "../ssg/plugins";

export default merge<Configuration>(
    entry,
    output,
    optimization,
    target,
    plugins
);

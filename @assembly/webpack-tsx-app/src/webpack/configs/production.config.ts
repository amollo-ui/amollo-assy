import merge from "webpack-merge";
import { Config } from "../../../lib";
import plugins from "../production/plugins";
import type { Configuration } from "webpack";

export default merge<Configuration>(Config.productionTsxConfig, plugins);

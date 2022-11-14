import { merge } from "webpack-merge";
import { Config } from "@amollo-assy/webpack-tsx-app";
import plugins from "../development/plugins";
import type { Configuration } from "webpack";

export default merge<Configuration>(Config.developmentTsxConfig, plugins);

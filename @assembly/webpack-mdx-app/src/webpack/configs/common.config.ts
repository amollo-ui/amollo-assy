import { merge } from "webpack-merge";
import { Config } from "@amollo-assy/webpack-tsx-app";
import modules from "../common/parts/module";
import type { Configuration } from "webpack";

export default merge<Configuration>(Config.commonTsxConfig, modules);

import directoryTreeWebpackPlugin from "./directoryTreeWebpackPlugin";
import type { Configuration } from "webpack";

const plugins: Configuration = {
    "plugins": [...directoryTreeWebpackPlugin()].filter(Boolean),
};

export default plugins;

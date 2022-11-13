import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
import type { WebpackPluginInstance } from "webpack";

/**
 * This Webpack plugin enforces the entire path of all required
 * modules match the exact case of the actual path on disk.
 */
export default (): Array<WebpackPluginInstance> => [
    new CaseSensitivePathsPlugin() as unknown as WebpackPluginInstance,
];

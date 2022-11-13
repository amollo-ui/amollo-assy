import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import type { WebpackPluginInstance } from "webpack";

/**
 * Recognizes certain classes of webpack errors and cleans, aggregates
 * and prioritizes them to provide a better Developer Experience
 */
export default (): Array<WebpackPluginInstance> => [
    new FriendlyErrorsWebpackPlugin() as unknown as WebpackPluginInstance,
];

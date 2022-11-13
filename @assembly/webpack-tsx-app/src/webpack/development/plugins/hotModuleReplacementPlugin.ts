import { HotModuleReplacementPlugin } from "webpack";

/**
 * Enables Hot Module Replacement, otherwise known as HMR.
 */
export default () => [new HotModuleReplacementPlugin()];

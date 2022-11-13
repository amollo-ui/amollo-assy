import type { Configuration } from "webpack";

// Whether to polyfill or mock certain Node.js globals and modules.
// This allows code originally written for the Node.js environment
// to run in other environments like the browser.
const node: Configuration = {
    "node": false,
};

export default node;

import type { Configuration } from "webpack";

// Fail out on the first error instead of tolerating it.
// By default webpack will log these errors in red in the terminal,
// as well as the browser console when using HMR, but continue bundling. To enable it:
// This will force webpack to exit its bundling process.
const bail: Configuration = {
    "bail": true,
};

export default bail;

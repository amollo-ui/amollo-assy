import type { Configuration } from "webpack";

// option was introduced in webpack 5 to empower users with
// the ability to activate and try out experimental features.
const experiments: Configuration = {
    "experiments": {
        // Support the Top Level Await Stage 3 proposal,it makes the module
        // an async module when await is used on the top-level.
        "topLevelAwait": true,
    },
};

export default experiments;

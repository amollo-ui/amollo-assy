import type { Configuration } from "webpack";

// The externals configuration option provides a way of excluding dependencies
// from the output bundles. Instead, the created bundle relies on that
// dependency to be present in the consumer's (any end-user application) environment.
// This feature is typically most useful to library developers, however there are
// a variety of applications for it.
const externals: Configuration = {
    // "react": "React",
    // "react-dom": "ReactDOM",
};

export default externals;

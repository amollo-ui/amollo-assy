import { KWsPaths } from "@amollo-assy/kit";
import type { Configuration } from "webpack";

// The base directory, an absolute path, for resolving entry points and
// loaders from configuration. By default the current directory is used,
// but it's recommended to pass a value in your configuration. This makes
// your configuration independent from CWD (current working directory).
const context: Configuration = {
    "context": KWsPaths.wsDirSourcePath,
};

export default context;

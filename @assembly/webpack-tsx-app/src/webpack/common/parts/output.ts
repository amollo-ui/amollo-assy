import { relative, resolve } from "path";
import { KOptions, KWsPaths, KEnv } from "@amollo-assy/kit";
import type { Configuration } from "webpack";

type DevtoolModuleFilenameCB = (info: {
    absoluteResourcePath: string;
}) => string;

const handleProdDevtoolModuleFilename: DevtoolModuleFilenameCB = info =>
    relative(KWsPaths.wsDirSourcePath, info.absoluteResourcePath).replace(
        /\\/g,
        "/"
    );

const handleDevtoolModuleFilename: DevtoolModuleFilenameCB = info =>
    resolve(info.absoluteResourcePath).replace(/\\/g, "/");

// The top-level output key contains set of options instructing webpack
// on how and where it should output your bundles, assets and anything
// else you bundle or load with webpack.
const output: Configuration = {
    "output": {
        // The build folder.
        "path": KWsPaths.wsDirBuildPath,
        // Add /* filename */ comments to generated require()s in the output.
        "pathinfo": KOptions.development,
        // There will be one main bundle, and one file per asynchronous chunk.
        // In development, it does not produce real files.
        "filename": KOptions.production
            ? `js/${KOptions.hashName}.m.js`
            : (KOptions.development || "") && `js/${KOptions.hashName}.m.js`,
        "chunkFilename": KOptions.production
            ? `js/${KOptions.hashName}.c.js`
            : (KOptions.development || "") && `js/${KOptions.hashName}.c.js`,

        // We inferred the "public path" (such as / or /my-project) from homepage.
        "publicPath": KEnv.vars.publicUrl,

        // Point sourcemap entries to original disk location (format as URL on Windows)
        "devtoolModuleFilenameTemplate": KOptions.production
            ? handleProdDevtoolModuleFilename
            : (KOptions.development || "") && handleDevtoolModuleFilename,
    },
};

export default output;

import hotMiddleware from "webpack-hot-middleware";
import { KEnv, KWsPaths } from "@amollo-assy/kit";
import type { Configuration } from "webpack-dev-server";

// This set of options is picked up by webpack-dev-server and
// can be used to change its behavior in various ways.v
const devServer: Configuration = {
    "client": {
        // Output running progress to console.
        "progress": true,
    },
    // Enable gzip compression for everything served:
    "compress": true,
    // When using the HTML5 History API, the index.html page will likely
    // have to be served in place of any 404 responses.
    // Enable devServer.historyApiFallback by setting it to true:
    "historyApiFallback": true,
    // Specify a port number to listen for requests on:
    "port": KEnv.vars.port,
    // TODO: MD
    "static": KWsPaths.wsDirBuildPath,

    // You can proxy the APIs of other servers through proxy.
    // proxy: {
    //     "/api": `http://${HOST}:${PORT}`
    // }
    // Will be used to determine where the bundles should be served from, and takes precedence.
    // "publicPath": "/", // correct later

    // Adds headers to all responses:
    "headers": {
        // "Access-Control-Allow-Origin": "*"
    },

    // Provides the ability to execute custom middleware after
    // all other middleware internally within the server.
    onAfterSetupMiddleware({ app, compiler }) {
        if (app) {
            app.use(
                hotMiddleware(compiler, {
                    "log": console.log,
                    "path": "/__webpack_hmr",
                    "heartbeat": 10 * 1000,
                })
            );
        }
    },
};

export default devServer;

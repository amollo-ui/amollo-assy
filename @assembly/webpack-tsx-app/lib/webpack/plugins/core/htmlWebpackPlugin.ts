import { join } from "path";
import HtmlWebpackPlugin, {
    type Options as HTMLOptions,
} from "html-webpack-plugin";
import { KOptions, KWsPaths, KEnv } from "@amollo-assy/kit";
import htmlMinify from "../options/htmlMinify";

const optionsByEnv = KOptions.production
    ? {
          "preload": KOptions.preload,
          "prefetch": KOptions.prefetch,
          "hash": false,
          "cache": true,
          "inject": true,
          "compile": false,
          "production": KOptions.production,
          // chunksSortMode: 'dependency',
          "minify": htmlMinify,
      }
    : {
          "minify": false,
      };

const options: HTMLOptions = {
    "inject": true,
    "appMountId": KEnv.vars.dotEnv?.REACT_APP_ROOT_DOM_NODE_ID || "app",
    "lang": KEnv.vars.dotEnv?.REACT_APP_DEFAULT_LANG || "en",
    "name": KEnv.vars.dotEnv?.REACT_APP_SHORT_NAME || "react-app",
    "template": KWsPaths.wsMainHtmlPath,
    "filename": "index.html",
    "build": ".", // FIXME: || wsDirBuildPath
    "excludeAssets": [/runtime.*.js/],
    "title": (KEnv.vars.dotEnv?.REACT_APP_NAME as string) || "",
    "description": KEnv.vars.dotEnv?.REACT_APP_DESCRIPTION,
    "favicon": join(
        KWsPaths.wsDirResourcesPath,
        "images",
        "favicon",
        "favicon.ico"
    ),
    ...optionsByEnv,
};

/**
 * The HtmlWebpackPlugin simplifies creation of HTML files to serve
 * your webpack bundles. This is especially useful for webpack bundles that
 * include a hash in the filename which changes every compilation.
 */
export default () => [new HtmlWebpackPlugin(options)];

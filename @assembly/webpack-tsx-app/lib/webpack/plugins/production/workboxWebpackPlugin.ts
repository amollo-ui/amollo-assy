import { join } from "path";
import { InjectManifest } from "workbox-webpack-plugin";
import { KWsPaths } from "@amollo-assy/kit";

export default () => [
    // The InjectManifest plugin will generate a list of URLs to precache and
    // add that precache manifest to an existing service worker file. It will
    // otherwise leave the file as-is
    new InjectManifest({
        // An existing service worker file that will be compiled and
        // have a precache manifest injected into it.
        "swSrc": join(KWsPaths.wsDirSourcePath, "cache", "serviceWorker"),
        // The asset name of the service worker file that will be created
        // by this plugin. If omitted, the name will be based on the swSrc name.
        "swDest": "sw.js",
    }),
];

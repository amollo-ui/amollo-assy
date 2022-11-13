import WebpackPwaManifest from "webpack-pwa-manifest";
import { KWsPaths, KEnv, KPathUtils } from "@amollo-assy/kit";

export default () => [
    new WebpackPwaManifest({
        "name": (KEnv.vars.dotEnv?.REACT_APP_NAME as string) || "",
        "short_name": (KEnv.vars.dotEnv?.REACT_APP_SHORT_NAME as string) || "",
        "description":
            (KEnv.vars.dotEnv?.REACT_APP_DESCRIPTION as string) || "",
        // TODO: background_color
        "background_color": "#fff",
        // TODO: theme_color
        "theme_color": "#fff",
        "display": "fullscreen",
        "inject": false,
        "fingerprints": false,
        "ios": true,
        "scope": KEnv.vars.dotEnv?.PUBLIC_URL as string,
        "start_url": KEnv.vars.dotEnv?.PUBLIC_URL as string,
        "orientation": "natural",
        "icons": [
            {
                "src": KPathUtils.servedSepOS(
                    KWsPaths.wsDirResourcesPath,
                    "images",
                    "icons",
                    "icon-pwa-512x512.png"
                ),
                "sizes": [72, 96, 128, 144, 150, 192, 384, 512],
            },
            {
                "src": KPathUtils.servedSepOS(
                    KWsPaths.wsDirResourcesPath,
                    "images",
                    "icons",
                    "apple-touch-icon.png"
                ),
                "sizes": [120, 152, 167, 180],
                "ios": true,
            },
        ],
    }),
];

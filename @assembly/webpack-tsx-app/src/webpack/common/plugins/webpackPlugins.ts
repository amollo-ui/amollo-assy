import { ProvidePlugin, DefinePlugin } from "webpack";
import { KOptions, KTools, KEnv } from "@amollo-assy/kit";

export default () => [
    // Automatically load modules instead of having to import or require them everywhere.
    new ProvidePlugin({
        "React": "react",
    }),

    // The DefinePlugin allows you to create global constants which can be
    // configured at compile time. This can be useful for allowing different
    // behavior between development builds and production builds. If you perform
    // logging in your development build but not in the production build you
    // might use a global constant to determine whether logging takes place.
    // That's where DefinePlugin shines, set it and forget it rules for
    // development and production builds.
    new DefinePlugin({
        "process": {
            "env": KTools.convertObjValuesToJSON(
                process.env || KEnv.vars.dotEnv
            ),
        },
        "BROWSER": true,
        "NODE_ENV": KEnv.mode,
        "__DEV__": KOptions.development,
        "__PROD__": KOptions.production,
    }),
];

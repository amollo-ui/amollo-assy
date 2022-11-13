import { KOptions } from "@amollo-assy/kit";
import cssLoader from "../loaders/css-loader";
import sassLoader from "../loaders/sass-loader";
import styleLoader from "../loaders/style-loader";
import postcssLoader from "../loaders/postcss-loader";
import cacheLoader from "../loaders/cache-loader";
import threadLoader from "../loaders/thread-loader";
import miniCssExtractPluginLoader from "../loaders/miniCssExtractPlugin-loader";
import type { RuleSetRule } from "webpack";

const styleRules = (): Array<RuleSetRule> => {
    // TODO: improve for modular css { "test": /\.m\.css$/ }, for css { "test": /^((?!\.m).)*css$/ }
    const cssRegex = /\.css$/,
        cssModuleRegex = /\.m\.css$/,
        sassRegex = /\.(scss|sass)$/,
        sassModuleRegex = /\.m\.(scss|sass)$/;

    const baseLoader = () => {
        if (KOptions.production) {
            return [miniCssExtractPluginLoader()];
        }

        return [
            KOptions.development ? cacheLoader() : "",
            threadLoader({ name: "css" }),
            styleLoader(),
        ].filter(Boolean);
    };

    return [
        {
            "test": cssRegex,
            "exclude": cssModuleRegex,
            "use": [
                ...baseLoader(),
                cssLoader({ "mode": "icss" }),
                postcssLoader(),
            ],
            "sideEffects": true,
        },
        {
            "test": cssModuleRegex,
            "use": [
                ...baseLoader(),
                cssLoader({ "withModules": true }),
                postcssLoader(),
            ],
            "include": /\.m\.css$/,
            "sideEffects": true,
        },
        {
            "test": sassRegex,
            "exclude": sassModuleRegex,
            "use": [
                ...baseLoader(),
                cssLoader({ "mode": "icss", "importLoaders": 2 }),
                postcssLoader(),
                sassLoader({
                    "sourceMap": KOptions.development,
                }),
            ],
            "sideEffects": true,
        },
        {
            "test": sassModuleRegex,
            "use": [
                ...baseLoader(),
                cssLoader({ "withModules": true, "importLoaders": 2 }),
                postcssLoader(),
                sassLoader({
                    "sourceMap": KOptions.development,
                }),
            ],
            "sideEffects": true,
        },
    ];
};

export default styleRules;

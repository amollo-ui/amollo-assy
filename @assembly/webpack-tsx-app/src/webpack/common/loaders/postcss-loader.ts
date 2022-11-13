import cssnano, { type Options } from "cssnano";
import { KOptions } from "@amollo-assy/kit";

const prodPlugin = () => {
    if (KOptions.production) {
        return [
            "postcss-discard-comments",
            cssnano({
                "safe": true,
                "calc": false,
                "zindex": false,
                "sourcemap": true,
                "autoprefixer": false,
                "normalizeCharset": true,
                "convertValues": { "length": false },
                "colormin": true,
            } as Options),
        ];
    } else {
        return [];
    }
};

export default () => ({
    "loader": "postcss-loader",
    "options": {
        "postcssOptions": {
            "ident": "postcss",
            "plugins": [
                "postcss-flexbugs-fixes",
                [
                    "postcss-preset-env",
                    {
                        "autoprefixer": {
                            "flexbox": "no-2009",
                        },
                        "stage": 3,
                    },
                ],
                [
                    "postcss-logical",
                    {
                        "dir": "ltr",
                    },
                ],
                ...prodPlugin(),
            ],
        },
    },
});

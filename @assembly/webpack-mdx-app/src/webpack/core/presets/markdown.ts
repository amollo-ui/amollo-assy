import { KArgv } from "@amollo-assy/kit";
// Loaders
import { Loaders } from "@amollo-assy/webpack-tsx-app";
import mdxjsLoader from "../loaders/@mdxjs-loader";
import remarkLoader from "../loaders/remark-loader";
// Plugins
import gfm from "remark-gfm";
import slug from "remark-slug";
import emoji from "remark-emoji";
import remarkCustomBlockquotes from "remark-custom-blockquotes";
import remarkFrontmatter from "remark-frontmatter";
import type { RuleSetRule } from "webpack";

const basePlugins = [
    gfm,
    slug,
    emoji,
    [
        remarkCustomBlockquotes,
        {
            "mapping": {
                "T>": "tip",
                "W>": "warning",
                "?>": "todo",
            },
        },
    ],
];

const mdxPlugins = [...basePlugins, remarkFrontmatter];

const mdRules = (): Array<RuleSetRule> => {
    if (!KArgv.parsedArgs?.md) {
        return [];
    }

    return [
        {
            "test": /\.mdx$/,
            "use": [
                Loaders.Core.babelLoader(),
                mdxjsLoader({ "remarkPlugins": mdxPlugins }),
            ],
        },
        {
            "test": /\.md$/,
            "use": [
                Loaders.Core.htmlLoader(),
                remarkLoader({ "remarkPlugins": basePlugins }),
            ],
        },
    ];
};

export default mdRules;

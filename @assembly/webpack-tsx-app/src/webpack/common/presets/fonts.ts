import type { RuleSetRule } from "webpack";

const fontRules = (): Array<RuleSetRule> => [
    {
        "test": /\.(ttf|eot|woff|otf|woff2)(\?\S*)?$/,
        "type": "asset/resource",
        "generator": {
            "filename": "fonts/[hash][ext][query]",
        },
    },
];

export default fontRules;

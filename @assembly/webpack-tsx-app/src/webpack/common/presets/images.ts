import { KWsPaths } from "@amollo-assy/kit";
import type { RuleSetRule } from "webpack";

const imageRules = (): Array<RuleSetRule> => [
    {
        "test": /\.(jpg|jpeg|png|ico)$/i,
        "type": "asset/resource",
        "generator": {
            "filename": "img/[name].[hash][ext][query]",
        },
    },
    {
        "test": /\.svg$/i,
        "type": "asset/resource",
        "exclude": [KWsPaths.wsDirSvgrIconsPath],
        "generator": {
            "filename": "img/[name].[hash][ext][query]",
        },
    },
    {
        "test": /\.svg$/i,
        "use": ["@svgr/webpack"],
        "include": [KWsPaths.wsDirSvgrIconsPath],
    },
];

export default imageRules;

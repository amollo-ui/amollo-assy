import type { MinifyOptions } from "html-webpack-plugin";

const minifyOptions: MinifyOptions = {
    "html5": true,
    "minifyJS": true,
    "minifyCSS": true,
    "minifyURLs": true,
    "sortClassName": false,
    "caseSensitive": false,
    "removeComments": true,
    "decodeEntities": true,
    "sortAttributes": false,
    "useShortDoctype": true,
    "keepClosingSlash": true,
    /** @see https://github.com/Ryuurock/my-blog/blob/963589ef8d61f917032a469f1822e588a4734d0f/source/_posts/custom-webpack-html-handle-plugin.md */
    "customAttrAssign": [/\$=/],
    "collapseWhitespace": true,
    "trimCustomFragments": true,
    "removeTagWhitespace": false,
    "removeAttributeQuotes": true,
    "removeEmptyAttributes": false,
    "collapseBooleanAttributes": true,
    "removeRedundantAttributes": true,
    "preventAttributesEscaping": false,
    "processConditionalComments": true,
    "removeScriptTypeAttributes": true,
    "removeStyleLinkTypeAttributes": true,
    "collapseInlineTagWhitespace": false,
    "customAttrSurround": [],
};

export default minifyOptions;

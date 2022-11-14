import RedirectWebpackPlugin from "../../core/plugins/RedirectWebpackPlugin";

export default () => [
    new RedirectWebpackPlugin({
        "redirects": {
            // ex. "support": "/contribute/",
        },
    }),
];

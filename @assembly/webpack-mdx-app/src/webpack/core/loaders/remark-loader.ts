import remarkHtml from "remark-html";

export default ({ remarkPlugins }: { remarkPlugins: Array<unknown> }) => ({
    "loader": "remark-loader",
    "options": {
        "remarkOptions": {
            "plugins": [
                ...remarkPlugins,
                [
                    remarkHtml,
                    {
                        "sanitize": {
                            "clobberPrefix": "",
                            "attributes": {
                                "code": ["className", "id"],
                                "*": ["id"],
                            },
                        },
                    },
                ],
            ],
        },
    },
});

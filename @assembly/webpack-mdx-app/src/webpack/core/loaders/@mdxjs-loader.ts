export default ({ remarkPlugins }: { remarkPlugins: Array<unknown> }) => ({
    "loader": "@mdx-js/loader",
    "options": {
        remarkPlugins,
    },
});

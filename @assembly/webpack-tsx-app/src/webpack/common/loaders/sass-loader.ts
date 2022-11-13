import sass from "sass";

export default ({ ...props }) => ({
    "loader": "sass-loader",
    "options": {
        "implementation": sass,
        "sassOptions": {
            "fiber": false,
            "outputStyle": "compressed",
            "webpackImporter": true,
        },
        ...props,
    },
});

import OptimizeCSSAssetsPlugin from "css-minimizer-webpack-plugin";

// This plugin uses cssnano to optimize and minify your CSS.
export default () => [new OptimizeCSSAssetsPlugin({})];

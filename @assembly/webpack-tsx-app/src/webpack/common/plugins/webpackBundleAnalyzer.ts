import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { KOptions } from "@amollo-assy/kit";

export default () => {
    if (!KOptions.analyze) {
        return [];
    }

    return [
        new BundleAnalyzerPlugin({
            "analyzerMode": KOptions.development ? "server" : "static",
        }),
    ];
};

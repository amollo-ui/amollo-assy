import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { KEnv } from "@amollo-assy/kit";

export default () => ({
    "loader": MiniCssExtractPlugin.loader,
    "options": {
        "esModule": true,
        "publicPath": KEnv.vars.publicUrl,
    },
});

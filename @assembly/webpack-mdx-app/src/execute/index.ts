import { KArgv, KArgvVerify } from "@amollo-assy/kit";
import { Execute } from "@amollo-assy/webpack-tsx-app";
import applyConfig from "../webpack/configs";

const appliedConfig = applyConfig();
KArgvVerify.verify(appliedConfig);

if (KArgv.script === "build") {
    (async () => await Execute.setupBuildCompiler(appliedConfig))();
} else if (KArgv.script === "start") {
    Execute.setupStartCompiler(appliedConfig);
}

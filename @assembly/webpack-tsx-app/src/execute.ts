import { KArgv, KArgvVerify } from "@amollo-assy/kit";
import { setupBuildCompiler, setupStartCompiler } from "../lib/execute";
import applyConfig from "./webpack/configs";

const appliedConfig = applyConfig();
KArgvVerify.verify(appliedConfig);

if (KArgv.script === "build") {
    (async () => await setupBuildCompiler(appliedConfig))();
} else if (KArgv.script === "start") {
    setupStartCompiler(appliedConfig);
}

import { KEnv, KArgv } from "@amollo-assy/kit";
import type { Configuration } from "webpack";

const name: Configuration = {
    "name":
        KArgv.parsedArgs?.config && typeof KArgv.parsedArgs.config === "string"
            ? KArgv.parsedArgs.config
            : KArgv.script || KEnv.mode,
};

export default name;

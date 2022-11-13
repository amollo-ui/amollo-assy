import rules from "../presets/rules";
import type { Configuration } from "webpack";

const module: Configuration = {
    "module": {
        rules,
    },
};

export default module;

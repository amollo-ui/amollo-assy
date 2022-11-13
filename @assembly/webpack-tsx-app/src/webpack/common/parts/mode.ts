import { KEnv } from "@amollo-assy/kit";
import type { Configuration } from "webpack";

const mode: Configuration = {
    "mode": KEnv.mode as "none" | "development" | "production" | undefined,
};

export default mode;

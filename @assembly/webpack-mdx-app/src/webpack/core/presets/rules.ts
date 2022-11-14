import markdown from "./markdown";
import type { ModuleOptions } from "webpack";

const rules: ModuleOptions["rules"] = [...markdown()];

export default rules;

import scripts from "./scripts";
import styles from "./styles";
import fonts from "./fonts";
import images from "./images";
import type { ModuleOptions } from "webpack";

const rules: ModuleOptions["rules"] = [
    ...scripts(),
    ...styles(),
    ...fonts(),
    ...images(),
];

export default rules;

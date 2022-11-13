import { sep } from "path";

/**
 * Depending on the operating system, it returns a valid path.
 * @param  {...string} paths - ways to unite.
 */
export const servedSepOS = (...paths: Array<string>): string => paths.join(sep);

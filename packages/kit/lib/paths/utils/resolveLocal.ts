import { join, resolve } from "path";

// TODO: Dynamic Resolve Local function for recognizing the directory abs path via parameters
// Such as [ ["src", "webpack", "configs"], "package.json", ... ]
export const resolveLocal = (
    relativePath: string | Array<string> = "",
    pwd: string = __dirname
): string => {
    const relPath = Array.isArray(relativePath)
        ? join(...relativePath)
        : relativePath;

    return resolve(pwd, relPath);
};

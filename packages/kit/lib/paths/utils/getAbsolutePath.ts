import { normalize, resolve } from "path";

type TGetAbsolutePath = (rootPath: string) => (relativePath: string) => string;

/**
 * Getting absolute path from relative path
 * @param {string} rootPath absolute path to the root directory
 */
export const getAbsolutePath: TGetAbsolutePath =
    rootPath =>
    /**
     *  @param {string} relativePath Relative path to the module
     *
     *  @returns {string} Absolute path to the file
     */
    relativePath =>
        normalize(resolve(rootPath, relativePath));

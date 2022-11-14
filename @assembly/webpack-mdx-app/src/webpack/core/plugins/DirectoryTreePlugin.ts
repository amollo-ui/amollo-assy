import { writeFile, existsSync, readFileSync } from "fs";
import { isAbsolute } from "path";
import directoryTree from "directory-tree";
import type { DirectoryTree, DirectoryTreeOptions } from "directory-tree";
import type { Compiler } from "webpack";

interface ITreeOptions extends DirectoryTreeOptions {
    /** @description A path to the directory that should be mapped, must be a relative path */
    dir: string;
    /** @description The path to and filename of the JSON file to create, must be a relative path */
    path: string;
    // A function to execute on every item in the tree (see below).
    enhance: (item: DirectoryTree, allOptions: ITreeOptions) => void;
    // A .filter callback run on each layer of children.
    filter: (
        value: DirectoryTree,
        index: number,
        array: Array<DirectoryTree>
    ) => boolean;
    // A .sort callback run on each layer of children.
    sort: (a: DirectoryTree, b: DirectoryTree) => number;
}

/**
 * @description Generate a json tree representing a directory
 * @throws { Error } The [path] and [dir] arguments must be a relative path
 */
class DirectoryTreePlugin {
    private treeOptions: DirectoryTreeOptions;

    constructor(private options: ITreeOptions) {
        const { dir, enhance, filter, path, sort, ...rest } = options;

        if (isAbsolute(dir) || isAbsolute(path)) {
            throw new Error(
                "The [path] and [dir] arguments must be a relative path"
            );
        }

        this.options = { dir, enhance, filter, sort, path };
        this.treeOptions = rest;
    }

    public apply(compiler: Compiler): void {
        compiler.hooks.compile.tap(
            "DirectoryTreeWebpackPlugin",
            this.buildTree.bind(this)
        );
    }

    /**
     * @description Construct the tree and write out a JSON file
     */
    private buildTree(): void {
        const { dir, enhance, filter, sort, path } = this.options;
        const tree = directoryTree(dir, this.treeOptions);
        const shouldRestructure = !!enhance || !!filter || !!sort;
        const modified = shouldRestructure ? this.restructure(tree) : tree;
        const json = JSON.stringify(modified);
        const current = existsSync(path)
            ? readFileSync(path, { "encoding": "utf-8" })
            : "";

        if (json !== current) {
            writeFile(path, json, error => {
                if (error) {
                    console.error(
                        "\r\n\r\nFailure building directory tree: ",
                        error,
                        "\r\n\r\n"
                    );
                }
            });
        }
    }

    /**
     * @description Enhance the given `item` and recursively enhance children
     */
    private restructure(item: DirectoryTree) {
        const { enhance, filter, sort } = this.options;
        const allOptions = Object.assign(this.options, this.treeOptions);

        if (enhance) enhance(item, allOptions);

        if (item.children) {
            item.children.forEach(child => {
                this.restructure(child);
            });

            if (filter) item.children = item.children.filter(filter);
            if (sort) item.children = item.children.sort(sort);
        }

        return item;
    }
}

export default DirectoryTreePlugin;

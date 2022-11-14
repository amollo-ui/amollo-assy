/* eslint-disable max-lines */
import fs from "fs";
import frontMatter from "front-matter";
import slug from "remark-slug";
import remarkExtractAnchors from "remark-extract-anchors";
import remarkHtml from "remark-html";
import remarkFrontMatter from "remark-frontmatter";
import gfm from "remark-gfm";
import emoji from "remark-emoji";
import { KPathUtils } from "@amollo-assy/kit";
import { type DirectoryTree } from "directory-tree";
import { type remark as Remark } from "remark";

export interface ICustomTree {
    group?: string;
    title?: string;
    sort?: number;
    url?: string;
    anchors?: Array<string>;
}

export interface IEnhanceTree extends DirectoryTree, ICustomTree {}

export interface IOptions {
    dir: string;
}

interface IAttributes {
    title: string;
    sort: number;
    contributors?: Array<string>;
    related?: Array<{ title: string; url: string }>;
}

export const enhance = (
    tree: IEnhanceTree,
    options: IOptions
): IEnhanceTree => {
    tree.url = KPathUtils.normalizeAbsoluteToRelative(
        tree.path,
        tree.extension,
        options.dir
    );

    if (tree.type === "file") {
        const anchors: Array<string> = [];
        // write the contents of the file to the variable content.
        const content = fs.readFileSync(tree.path, "utf8");
        const { attributes } = frontMatter<IAttributes>(content);

        // remove underscore from fetched files
        if (tree.name[0] === "_") {
            tree.name = tree.name.replace("_", "");
            tree.url = tree.url.replace("_", "");
        }

        (async () => {
            /** @see https://www.sobyte.net/post/2022-07/es-module-error/ */
            const { remark } = await (eval(`import("remark")`) as Promise<{
                remark: typeof Remark;
            }>);

            await remark()
                .use(slug)
                .use(remarkFrontMatter)
                .use(gfm)
                .use(emoji)
                .use(remarkExtractAnchors, { anchors, "levels": 3 })
                .use(remarkHtml, {
                    "sanitize": {
                        "clobberPrefix": "",
                        "attributes": {
                            "code": ["className", "id"],
                            "*": ["id"],
                        },
                    },
                })
                .process(content, err => {
                    if (err) {
                        throw err;
                    }
                });
        })();

        tree.anchors = anchors;

        Object.assign(
            tree,
            { "path": tree.path.replace(/\\/g, "/") },
            attributes
        );
    }

    return tree;
};

export const filter = () => true;

export const sort = (a: IEnhanceTree, b: IEnhanceTree): number => {
    const group1 = (a.group || "").toLowerCase();
    const group2 = (b.group || "").toLowerCase();

    if (group1 < group2) return -1;
    if (group1 > group2) return 1;
    if (a.sort && b.sort) return a.sort - b.sort;

    const aTitle = (a.title || "").toLowerCase();
    const bTitle = (b.title || "").toLowerCase();
    if (aTitle < bTitle) return -1;
    if (aTitle > bTitle) return 1;

    return 0;
};

export const restructure = (
    item: IEnhanceTree,
    options: IOptions
): IEnhanceTree => {
    enhance(item, options);

    if (item?.children) {
        item.children.forEach(child => restructure(child, options));
        item.children.filter(filter);
        item.children.sort(sort);
    }

    return item;
};

import type { IEnhanceTree } from "./contentTreeEnhancers";

const flattenContentTree = (tree: IEnhanceTree): Array<string> => {
    const paths: Array<string> = [];

    const crawl = (node: IEnhanceTree) => {
        if (node.url) {
            paths.push(node.url);
        }

        if (node.children) {
            node.children.map(crawl);
        }
    };

    tree.children?.map(crawl);

    return paths;
};

export default flattenContentTree;

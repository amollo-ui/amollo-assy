declare module "remark-extract-anchors" {
    import { Node, Data } from "unist";

    interface IOptions {
        anchors?: Array<unknown>;
        levels?: number;
    }
    type AstTree = (<Tree extends Node<Data>>(tree: Tree) => void) &
        (<Tree_1 extends Node<Data>>(tree: Tree_1) => void);

    type RRemarkExtractAnchors = (ast: Node) => void;
    type RemarkExtractAnchors = (options?: IOptions) => RRemarkExtractAnchors;
    const remarkExtractAnchors: RemarkExtractAnchors;

    export default remarkExtractAnchors;
}

declare module "remark-custom-blockquotes" {
    type ICustomBlockquotes = (options: {
        mapping: Record<string, unknown>;
    }) => <Tree extends import("unist").Node<import("unist").Data>>(
        tree: Tree,
        file
    ) => void;

    const customBlockquotes: ICustomBlockquotes;

    export default customBlockquotes;
}

declare module "static-site-generator-webpack-plugin" {
    import type { Compiler } from "webpack";

    interface IPlugin {
        apply(compiler: Compiler): void;
    }

    interface IPluginOptions {
        entry?: string;
        paths: Array<string>;
        locals: Record<string, unknown>;
        globals: Record<string, unknown>;
        crawl?: boolean;
    }

    type ISSGWebpackPlugin = new (options: IPluginOptions) => IPlugin;

    const SSGWebpackPlugin: TSSGWebpackPlugin;

    export default SSGWebpackPlugin;
}

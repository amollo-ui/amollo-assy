import DirectoryTreePlugin from "../../core/plugins/DirectoryTreePlugin";
import { enhance, filter, sort } from "../../../utils/contentTreeEnhancers";
import { KArgv } from "@amollo-assy/kit";

export default () => {
    if (!KArgv.parsedArgs?.md) {
        return [];
    }

    const mdContentsDirName = "content";

    return [
        new DirectoryTreePlugin({
            "dir": `src/${mdContentsDirName}`,
            "path": "src/_content.json",
            "extensions": /\.mdx?/,
            "attributes": ["type", "size", "extension"],
            enhance,
            filter,
            sort,
        }),
    ];
};

// Core
import directoryTree from "directory-tree";
import fs from "fs";
import path from "path";
import chalk from "chalk";

// Utils
import { restructure } from "../../src/utils/contentTreeEnhancers";

const genContentTree = (entryContent: string, output: string) => {
    let content = directoryTree(entryContent, {
        "extensions": /\.(md|mdx)/,
        "attributes": ["size", "type", "extension"],
    });

    content = restructure(content, { "dir": entryContent });

    try {
        fs.writeFileSync(path.resolve(output), JSON.stringify(content));
    } catch (e) {
        if (e) {
            console.error(chalk.red("genContentTree"), chalk.red(e));
        } else {
            console.log(
                chalk.green("Successfully built content tree file at " + output)
            );
        }
    }
};

export default genContentTree;

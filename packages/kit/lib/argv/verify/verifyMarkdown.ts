import chalk from "chalk";
import { join } from "path";
import fs from "fs";
import { wsDirSourcePath } from "../../paths/wsPaths";

const requiredMdConfigVerify = () => {
    const contentPath = join(wsDirSourcePath, "content");

    if (!fs.existsSync(contentPath)) {
        throw new Error(
            chalk.red(`Directory content not found in path ${contentPath}`)
        );
    }
};

const verifyMd = () => {
    requiredMdConfigVerify();
};

export default verifyMd;

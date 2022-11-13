import chalk from "chalk";
import { join } from "path";
import fs from "fs";
import { KWsPaths } from "../../paths";

const requiredMdConfigVerify = () => {
    const contentPath = join(KWsPaths.wsDirSourcePath, "content");

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

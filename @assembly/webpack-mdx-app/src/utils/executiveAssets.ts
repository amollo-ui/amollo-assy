import { join } from "path";
import { readdir, readFile, writeFile } from "fs";
import * as cheerio from "cheerio";
import chalk from "chalk";
import { KWsPaths } from "@amollo-assy/kit";
import flattenContentTree from "./flattenContentTree";
import type { IEnhanceTree } from "./contentTreeEnhancers";

// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const contentTree: IEnhanceTree = require(KWsPaths.wsContentJsonPath);

// TODO: Refactor later and merge export paths in SSGWebpackPlugin paths
// content tree to path array
const pathsContent = [...flattenContentTree(contentTree)];

const executiveAssets = ({
    jsmodules,
    cssmodules,
}: {
    jsmodules: Array<string>;
    cssmodules: Array<string>;
}) => {
    for (const path of pathsContent) {
        readdir(join(KWsPaths.wsDirBuildPath, path), (err, files) => {
            if (err) throw err;

            files.forEach(item => {
                if (item.endsWith(".html")) {
                    const pathHtml = join(KWsPaths.wsDirBuildPath, path, item);

                    readFile(pathHtml, "utf8", (errReadFile, data) => {
                        if (errReadFile) throw errReadFile;
                        const $ = cheerio.load(data);

                        jsmodules.forEach(jsmodule => {
                            $("body").append(
                                `<script src="/${jsmodule}"></script>`
                            );
                        });
                        cssmodules.forEach(cssmodule => {
                            $("head").append(
                                `<link rel="stylesheet" href="/${cssmodule}" />`
                            );
                        });
                        const html = $.html();

                        writeFile(pathHtml, html, "utf8", errWriteFile => {
                            if (errWriteFile) {
                                console.error(
                                    chalk.red(
                                        `${
                                            path + item
                                        } assets have not been added ❌`
                                    )
                                );
                                throw errWriteFile;
                            }
                            console.log(
                                chalk.greenBright(
                                    `${path + item} added assets ✔`
                                )
                            );
                        });
                    });
                }
            });
        });
    }
};

export default executiveAssets;

#!/usr/bin/env node

import { spawn } from "child_process";
import chalk from "chalk";
import { KArgv, KArgvVerify } from "@amollo-assy/kit";
import { LPaths } from "../src/paths/localPaths";

if (KArgv.isIncludeScript) {
    KArgvVerify.verifyArgs();
    const executableScript = () => {
        const scriptResult = spawn("node", [
            LPaths.ownScriptPath,
            KArgv.script,
            ...KArgv.nodeArgs,
        ]);

        scriptResult.stdout.on("data", data => {
            console.log(`${data}`);
        });
        scriptResult.stderr.on("data", data => {
            console.log(`${data}`);
        });
        scriptResult.on("error", error => {
            console.error(`error: ${error.message}`);
        });
        scriptResult.on("close", code => {
            console.info(`child process exited with code ${code}`);
        });
    };

    const spawnScript = () => executableScript();

    spawnScript();
} else {
    if (KArgv.script) {
        throw new Error(chalk.red(`⚠ Unknown ${KArgv.script} script`));
    } else {
        throw new Error(chalk.red("⚠ The script field is empty"));
    }
}

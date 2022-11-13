import webpack, { type Configuration } from "webpack";
import chalk from "chalk";

const setupBuildCompiler = (config: Configuration) => {
    const compiler = webpack(config);

    compiler.run((error, stats): null | void => {
        if (error) {
            // error configuration
            console.error(error.stack || error);
            return null;
        }

        const info = stats?.toString({
            "hash": true,
            "colors": true,
            "modules": false,
            "version": true,
            "env": true,
            "entrypoints": false,
        });

        console.log(chalk.greenBright("✔ Build completed"));
        console.info(chalk.blueBright(info));

        if (stats?.hasErrors()) {
            // Compile-time error (broken import, syntax error, etc)
            console.log(chalk.redBright("➡ Compile-time Error!"));
        }

        if (stats?.hasWarnings()) {
            // Compile-time warnings
            console.log(chalk.yellowBright("➡ Compile-time Warning!"));
        }
    });
};

export default setupBuildCompiler;

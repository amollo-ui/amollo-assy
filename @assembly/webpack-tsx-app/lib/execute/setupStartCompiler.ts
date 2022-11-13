import webpack, { type Configuration } from "webpack";
import WebpackDevServer from "webpack-dev-server";
import chalk from "chalk";
import { KEnv, KHelpers } from "@amollo-assy/kit";
import devServerOptions from "../../src/webpack/development/options/devServer";

const setupStartCompiler = async (
    config: Configuration
): Promise<null | void> => {
    try {
        const chosenPort = await KHelpers.choosePort(
            KEnv.vars.port,
            devServerOptions.host
        );

        if (!chosenPort) {
            console.log(
                chalk.yellowBright("➡ It's impossible to run the app 😢")
            );
            return null;
        }

        Object.assign(devServerOptions, {
            "port": chosenPort,
        });

        const compiler = await webpack(config);
        const server = new WebpackDevServer(devServerOptions, compiler);

        server.startCallback(() => {
            console.log(
                `${chalk.greenBright(
                    "➡ Server listening on"
                )} ${chalk.blueBright(chosenPort)} ${chalk.greenBright("port")}`
            );
        });
    } catch (e) {
        console.log(chalk.redBright("➡ Error!"));
        console.error((e as Error).message || e);
    }
};

export default setupStartCompiler;

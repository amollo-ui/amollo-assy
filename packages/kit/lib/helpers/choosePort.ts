import chalk from "chalk";
import detectPort from "detect-port-alt";
import Inquirer, { type QuestionCollection } from "inquirer";

export const choosePort = async (
    defaultPort: string | number,
    host?: string
): Promise<string | null | void> => {
    try {
        // TODO: Don't correct work with object argument { port: port, hostname: hostname }
        const port = await detectPort(defaultPort);

        if (+port === +defaultPort) {
            return String(defaultPort);
        }

        const message = `Port ${host}:${defaultPort} is already in use.`;
        if (process.stdout.isTTY) {
            const questionName = "changePort";
            const question: QuestionCollection = {
                "type": "confirm",
                "name": questionName,
                "message": chalk.yellowBright(
                    `${message} Do you want to run the app on another port?`
                ),
                "default": true,
            };
            const inquirer = (await import(
                "inquirer"
            )) as unknown as typeof Inquirer;

            const result = await inquirer.prompt(question);
            return result[questionName] ? String(port) : null;
        }

        console.log(chalk.redBright(`➡ ${message}`));
    } catch (e) {
        console.log(chalk.redBright("➡ Error!"));
        console.error((e as Error).message || e);
    }
};

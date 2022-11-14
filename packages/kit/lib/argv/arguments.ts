import chalk from "chalk";
import { sep } from "path";
import parseArguments, {
    type IDataParseArguments,
} from "./utils/parseArguments";

const pos = require.main?.filename.search("bin");
const bin = require.main?.filename
    .substring(pos || 0)
    .split(sep)[1]
    .replace(/\.[^/.]+$/, "");

const argv = process.argv;
const args = argv.slice(2);
const includesCommand = ["build", "start", "test"];
const scriptIndex = args.findIndex(x => includesCommand.includes(x));

export const parsedArgv: IDataParseArguments = parseArguments(argv);
export const script = !~scriptIndex ? args[0] : args[scriptIndex];
export const nodeArgs =
    scriptIndex >= 0 ? args.slice(scriptIndex + 1, args.length) : [];
export const parsedArgs: IDataParseArguments | null =
    nodeArgs.length > 0 ? parseArguments(nodeArgs) : null;
export const isIncludeScript = includesCommand.includes(script);

if (!script && bin !== "wmxa-gct") {
    console.error(chalk.yellow("🔍 The script field is empty"));
    process.exit(1);
}

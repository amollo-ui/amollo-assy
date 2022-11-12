// type KeyOfArguments = "config";

// export type IDataParseArguments = {
//     [key in KeyOfArguments]: string | boolean;
// };

export interface IDataParseArguments {
    [key: string]: string | boolean;
}

/**
 * Extracting into a separate object those command parameters that were given to run.
 *
 * @param {Array<string>} argv              parameters to run
 * @example [ "--config", "configs/scripts" ] => { config: "configs/scripts" }
 *
 * @returns {Object<string, string | boolean>}        Those values that have a prefix '--' are changed to
 *                                          a key and the value after it is assigned to its value.
 */
const parseArguments = (argv: Array<string>): IDataParseArguments => {
    const data: IDataParseArguments = {};

    argv.map((item, index) => {
        if (item.startsWith("--")) {
            const name = item.substring(2);
            let value = argv[index + 1] || true;
            if (String(value).startsWith("--")) value = true;

            data[name] = value;
            return data;
        }

        return;
    });

    return data;
};

export default parseArguments;

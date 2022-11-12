export const convertObjValuesToJSON = (
    obj: Record<string, unknown>
): Record<string, string> => {
    const init: Record<string, string> = {};

    Object.keys(obj).forEach(item => {
        init[item] = JSON.stringify(obj[item]);
    });

    return init;
};

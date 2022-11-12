module.exports = {
    "root": true,
    "extends": ["@amollo-lint/eslint-config-ts-prettier"],
    "parserOptions": {
        "project": "tsconfig.json",
        "tsconfigRootDir": __dirname,
    },
    "ignorePatterns": ["build"],
};

module.exports = {
    "extends": "@amollo-lint/eslint-config-ts-prettier",
    "rules": {
        "@typescript-eslint/no-namespace": "off",
    },
    "ignorePatterns": ["build"],
    "parserOptions": {
        "project": "tsconfig.json",
        "tsconfigRootDir": __dirname,
    },
};

import { KWsPaths, KOptions } from "@amollo-assy/kit";

export default ({
    importLoaders = 1,
    withModules = false,
    mode = "local",
    ...props
} = {}) => ({
    "loader": "css-loader",
    "options": {
        // Enables/Disables or setups number of loaders applied before CSS loader.
        importLoaders,
        // Enables/Disables url/image-set functions handling. Control url() resolving.
        // Absolute URLs are not resolving.
        "url": true,
        "modules": withModules && {
            "mode": mode,
            "exportGlobals": true,
            "localIdentName": KOptions.production
                ? "[hash:base64]"
                : "[path][name]__[local]",
            "localIdentContext": KWsPaths.wsDirSourcePath,
            "localIdentHashSalt": "my-custom-hash",
            "exportLocalsConvention": "camelCaseOnly",
            "exportOnlyLocals": false,
        },
        ...props,
    },
});

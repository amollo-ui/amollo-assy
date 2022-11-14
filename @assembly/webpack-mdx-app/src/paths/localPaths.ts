import { join } from "path";
import { KPathUtils } from "@amollo-assy/kit";

export namespace LPaths {
    const getAbsolutePath = KPathUtils.getAbsolutePath(
        KPathUtils.resolveLocal(["..", ".."], __dirname)
    );

    export const ownDirRootPath = getAbsolutePath("");
    export const ownPkgJsonPath = getAbsolutePath("package.json");
    export const ownDirConfigsPath = getAbsolutePath(
        join("src", "webpack", "configs")
    );
    export const ownScriptPath = getAbsolutePath(join("src", "execute"));
}

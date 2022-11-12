import { getAbsolutePath as absolutePath } from "./utils/getAbsolutePath";
import { realpathSync } from "fs";
import { join } from "path";

export const wsDirRootPath = realpathSync(process.cwd());
const getAbsolutePath = absolutePath(wsDirRootPath);

export const wsDirSourcePath = getAbsolutePath("src");
export const wsContentJsonPath = join(wsDirSourcePath, "_content.json");
export const wsDotEnvPath = getAbsolutePath(".env");
export const wsPkgJsonPath = getAbsolutePath("package.json");
export const wsConfigPath = getAbsolutePath("webpack.config");
export const wsDirCachePath = getAbsolutePath(".cache");
export const wsDirBuildPath = getAbsolutePath("dist");
export const wsDirPublicPath = getAbsolutePath("public");
export const wsDirResourcesPath = join(wsDirPublicPath, "assets");
export const wsDirStaticPath = join(wsDirPublicPath, "static");
export const wsDirSvgrIconsPath = getAbsolutePath(
    join("src", "theme", "icons")
);
export const wsMainHtmlPath = join(wsDirStaticPath, "html", "index.html");

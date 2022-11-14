import { RawSource } from "webpack-sources";
import type { Compiler, sources } from "webpack";

interface IRedirectOptions {
    redirects: Record<string, string>;
}

/**
 * @author Juho Vepsäläinen <https://github.com/bebraw>
 * {@link https://www.npmjs.com/package/redirect-webpack-plugin}
 */
class RedirectWebpackPlugin {
    constructor(private options: IRedirectOptions) {}

    public apply(compiler: Compiler): void {
        const { redirects } = this.options;

        compiler.hooks.emit.tapAsync(
            "RedirectWebpackPlugin",
            (compilation, cb) => {
                Object.keys(redirects).forEach(from => {
                    const to = redirects[from];

                    compilation.assets[`${from}/index.html`] = new RawSource(
                        `<meta http-equiv="refresh" content="0; url=${to}"><link rel="canonical" href="${to}" />`
                    ) as unknown as sources.Source;
                });

                cb();
            }
        );
    }
}

export default RedirectWebpackPlugin;

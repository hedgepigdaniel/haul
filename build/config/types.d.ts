import webpack from 'webpack';
import { MinifyOptions } from 'terser';
import { DeepNonNullable, Overwrite, Assign } from 'utility-types';
import Runtime from '../runtime/Runtime';
export declare type ServerConfig = {
    port?: number;
    host?: string;
};
export declare type NormalizedServerConfig = DeepNonNullable<ServerConfig>;
export declare type EnvOptions = {
    platform: string;
    root: string;
    dev: boolean;
    bundleType?: 'basic-bundle' | 'indexed-ram-bundle' | 'file-ram-bundle';
    bundleMode: 'single-bundle' | 'multi-bundle';
    bundleTarget?: 'file' | 'server';
    assetsDest?: string;
    bundleOutput?: string;
    sourcemapOutput?: string;
    minify?: boolean;
    port?: number;
};
export declare type BundleConfig = Assign<{
    name?: string;
    entry: string | string[];
    type?: 'basic-bundle' | 'indexed-ram-bundle' | 'file-ram-bundle';
    platform?: string;
    root?: string;
    dev?: boolean;
    assetsDest?: string;
    minify?: boolean;
    minifyOptions?: Pick<MinifyOptions, Exclude<keyof MinifyOptions, 'sourceMap'>>;
    sourceMap?: boolean | 'inline';
    dll?: boolean;
    app?: boolean;
    dependsOn?: string[];
    providesModuleNodeModules?: Array<string | {
        name: string;
        directory: string;
    }>;
    hasteOptions?: any;
    transform?: WebpackConfigTransform;
}, ExternalBundleConfig>;
export declare type ExternalBundleConfig = {
    copyBundle?: boolean;
    bundlePath?: string;
    manifestPath?: string;
    assetsPath?: string;
};
export declare type TemplatesConfig = {
    filename: {
        [platform: string]: string;
    };
};
export declare type NormalizedTemplatesConfig = TemplatesConfig;
export declare type NormalizedBundleConfig = Assign<Overwrite<Pick<DeepNonNullable<BundleConfig>, Exclude<keyof BundleConfig, 'transform' | keyof ExternalBundleConfig>>, {
    minifyOptions: BundleConfig['minifyOptions'];
}>, {
    external: false | Overwrite<DeepNonNullable<ExternalBundleConfig>, {
        manifestPath: ExternalBundleConfig['manifestPath'];
    }>;
}>;
export declare type WebpackConfigTransform = (params: {
    bundleName: string;
    config: webpack.Configuration;
    env: EnvOptions;
    runtime: Runtime;
}) => webpack.Configuration | void;
export declare type BundleConfigBuilder = (env: EnvOptions, runtime: Runtime) => BundleConfig;
export declare type ProjectConfig = {
    server?: ServerConfig;
    platforms?: string[];
    templates?: TemplatesConfig;
    bundles: {
        [bundleName: string]: BundleConfigBuilder | BundleConfig;
    };
};
export declare type NormalizedProjectConfig = {
    server: NormalizedServerConfig;
    platforms: string[];
    templates: NormalizedTemplatesConfig;
    bundles: {
        [bundleName: string]: NormalizedBundleConfig;
    };
    webpackConfigs: {
        [bundleName: string]: webpack.Configuration;
    };
};
export declare type NormalizedProjectConfigBuilder = (runtime: Runtime, env: EnvOptions) => NormalizedProjectConfig;
//# sourceMappingURL=types.d.ts.map
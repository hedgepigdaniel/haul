/// <reference types="node" />
import { EnvOptions } from '../config/types';
import { Assign } from 'utility-types';
import Hapi from '@hapi/hapi';
import http from 'http';
import Runtime from '../runtime/Runtime';
import UserInterface from './UI';
declare type ServerEnvOptions = Assign<Pick<EnvOptions, 'dev' | 'minify' | 'assetsDest' | 'root'>, {
    noInteractive: boolean;
    eager: string[];
    bundleNames: string[];
    platforms: string[];
}>;
export default class Server {
    private runtime;
    private configPath;
    private options;
    compiler: any;
    server: Hapi.Server | undefined;
    httpServer: http.Server;
    resetConsole: () => void;
    disposeLoggerProxy: () => void;
    ui: UserInterface;
    constructor(runtime: Runtime, configPath: string, options: ServerEnvOptions);
    createCompiler(): any;
    attachProcessEventsListeners(): void;
    exit(exitCode: number, error: any | undefined): void;
    listen(host: string, port: number): Promise<void>;
    hijackConsole(): () => void;
    logServerEvent(request: Hapi.Request, event?: Hapi.RequestEvent): void;
}
export {};
//# sourceMappingURL=Server.d.ts.map
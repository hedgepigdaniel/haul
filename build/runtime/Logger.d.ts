import { AnsiColor, AnsiModifier } from 'ansi-fragments';
import InspectorClient from './InspectorClient';
declare enum LoggerLevel {
    Debug = "debug",
    Info = "info",
    Warn = "warn",
    Error = "error",
    Done = "done"
}
declare type ProxyHandler = (level: LoggerLevel, ...args: unknown[]) => void;
export default class Logger {
    private inspectorClient?;
    static Level: typeof LoggerLevel;
    static LevelColorMapping: {
        [LoggerLevel.Info]: AnsiColor;
        [LoggerLevel.Warn]: AnsiColor;
        [LoggerLevel.Error]: AnsiColor;
        [LoggerLevel.Done]: AnsiColor;
        [LoggerLevel.Debug]: AnsiColor;
    };
    private proxyHandler;
    private logFile;
    private logAsJson;
    minLoggingLevel: LoggerLevel;
    constructor(inspectorClient?: InspectorClient | undefined);
    /**
     * Enables logging all messages to file as well as to process' STDOUT.
     * If `json` is `true` each log will be in JSON format for easier processing.
     * If relative `filename` is passed, it will be resolved based on process' CWD.
     */
    enableFileLogging(filename: string, { json }: {
        json: boolean;
    }): void;
    /**
     * Disposes the logger by closing all open handles.
     * If file logging was enabled, the file descriptor will be closed here.
     * Should always be called before exiting from process.
     */
    dispose(): void;
    info: (...args: unknown[]) => void;
    warn: (...args: unknown[]) => void;
    error: (...args: unknown[]) => void;
    done: (...args: unknown[]) => void;
    debug: (...args: unknown[]) => void;
    /**
     * Enables proxy for all logs.
     * Messages will be passed to `handler` function and __won't be logged__ to process' STDOUT.
     * Returns a dispose function to disable the proxy.
     */
    proxy: (handler: ProxyHandler) => () => void;
    /**
     * Prints arguments _as is_ without any processing.
     */
    print: (...args: unknown[]) => void;
    /**
     * Enhances given arguments with ANSI color.
     */
    enhanceWithColor: (enhancer: AnsiColor, ...args: unknown[]) => string;
    /**
     * Enhances given arguments with ANSI modifier, for example with `bold`, `italic` etc.
     */
    enhanceWithModifier: (enhancer: AnsiModifier, ...args: unknown[]) => string;
    /**
     * Enhances given arguments with level prefix.
     * Example: info ▶︎ argument1 argument2
     */
    enhanceWithLevel: (level: LoggerLevel, ...args: unknown[]) => string;
    /**
     * Stringify array of elements into a string array.
     * Uses Node's built-in `util.inspect` function to stringify non-string elements.
     */
    stringify(args: any[]): string[];
    private createLoggingFunction;
}
export {};
//# sourceMappingURL=Logger.d.ts.map
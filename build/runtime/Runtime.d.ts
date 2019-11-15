import InspectorClient from './InspectorClient';
import Logger from './Logger';
export default class Runtime {
    private inspectorClient?;
    logger: Logger;
    constructor(inspectorClient?: InspectorClient | undefined);
    ready(waitForInspector?: boolean): Promise<void>;
    startCommand(command: string | readonly string[], argv: string[]): void;
    unhandledError(error: Error | string): void;
    nodeInspectorStarted(wait?: boolean): void;
    complete(exitCode?: number): void;
}
//# sourceMappingURL=Runtime.d.ts.map
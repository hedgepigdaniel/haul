import WebSocket from 'ws';
import { InspectorEvent } from '@haul-bundler/inspector-events';
export default class InspectorClient {
    socket?: WebSocket;
    shouldExit: boolean;
    buffer: InspectorEvent[];
    onReady: () => void;
    constructor(host?: string, port?: string);
    /**
     * Used only when Haul process should wait for connection with inspector.
     */
    ready(): Promise<unknown>;
    close(): void;
    private connect;
    emitEvent(event: InspectorEvent): void;
}
//# sourceMappingURL=InspectorClient.d.ts.map
import Hapi from '@hapi/hapi';
import Runtime from '../runtime/Runtime';
export default function setupCompilerRoutes(runtime: Runtime, server: Hapi.Server, compiler: any, { port, bundleNames, platforms, }: {
    port: number;
    bundleNames: string[];
    platforms: string[];
}): void;
//# sourceMappingURL=setupCompilerRoutes.d.ts.map
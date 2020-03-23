export declare class CapacitorElectron {
    Plugins: {};
    platform: string;
    isNative: boolean;
    constructor();
    pluginMethodNoop(_target: any, _prop: PropertyKey, pluginName: string): Promise<never>;
    getPlatform(): string;
    isPluginAvailable(name: string): boolean;
    convertFileSrc(filePath: string): string;
    handleError(e: Error): void;
}

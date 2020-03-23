import { WebPlugin, NetworkPlugin, NetworkStatus } from '@capacitor/core';
export interface PluginListenerHandle {
    remove: () => void;
}
export declare class NetworkPluginElectron extends WebPlugin implements NetworkPlugin {
    listenerFunction: any;
    constructor();
    getStatus(): Promise<NetworkStatus>;
    addListener(eventName: 'networkStatusChange', listenerFunc: (status: NetworkStatus) => void): PluginListenerHandle;
}
declare const Network: NetworkPluginElectron;
export { Network };

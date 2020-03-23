import { WebPlugin, AppPlugin, AppLaunchUrl, AppState } from '@capacitor/core';
export declare class AppPluginElectron extends WebPlugin implements AppPlugin {
    constructor();
    exitApp(): never;
    canOpenUrl(_options: {
        url: string;
    }): Promise<{
        value: boolean;
    }>;
    openUrl(options: {
        url: string;
    }): Promise<{
        completed: boolean;
    }>;
    getLaunchUrl(): Promise<AppLaunchUrl>;
    getState(): Promise<AppState>;
}
declare const App: AppPluginElectron;
export { App };

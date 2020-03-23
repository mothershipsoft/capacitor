import { WebPlugin, SplashScreenPlugin, SplashScreenHideOptions, SplashScreenShowOptions } from "@capacitor/core";
export declare class SplashScreenPluginElectron extends WebPlugin implements SplashScreenPlugin {
    ipc: any;
    constructor();
    show(options?: SplashScreenShowOptions, callback?: Function): Promise<void>;
    hide(options?: SplashScreenHideOptions, callback?: Function): Promise<void>;
}
declare const SplashScreen: SplashScreenPluginElectron;
export { SplashScreen };

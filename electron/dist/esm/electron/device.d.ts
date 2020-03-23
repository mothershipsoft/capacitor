import { DeviceBatteryInfo, DeviceInfo, DeviceLanguageCodeResult, DevicePlugin, WebPlugin } from "@capacitor/core";
export declare class DevicePluginElectron extends WebPlugin implements DevicePlugin {
    constructor();
    getInfo(): Promise<DeviceInfo>;
    getBatteryInfo(): Promise<DeviceBatteryInfo>;
    getLanguageCode(): Promise<DeviceLanguageCodeResult>;
}
declare const Device: DevicePluginElectron;
export { Device };

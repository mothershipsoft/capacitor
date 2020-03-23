import { WebPlugin, ClipboardPlugin, ClipboardWrite, ClipboardReadResult } from "@capacitor/core";
export declare class ClipboardPluginElectron extends WebPlugin implements ClipboardPlugin {
    constructor();
    write(options: ClipboardWrite): Promise<void>;
    read(): Promise<ClipboardReadResult>;
}
declare const Clipboard: ClipboardPluginElectron;
export { Clipboard };

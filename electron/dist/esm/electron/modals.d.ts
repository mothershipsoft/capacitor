import { WebPlugin } from "@capacitor/core";
import { ModalsPlugin, AlertOptions, PromptOptions, PromptResult, ConfirmOptions, ConfirmResult, ActionSheetOptions, ActionSheetResult } from "@capacitor/core";
export declare class ModalsPluginElectron extends WebPlugin implements ModalsPlugin {
    constructor();
    alert(options: AlertOptions): Promise<void>;
    prompt(options: PromptOptions): Promise<PromptResult>;
    confirm(options: ConfirmOptions): Promise<ConfirmResult>;
    showActions(options: ActionSheetOptions): Promise<ActionSheetResult>;
}
declare const Modals: ModalsPluginElectron;
export { Modals };

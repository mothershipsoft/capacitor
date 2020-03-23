import { WebPlugin } from '@capacitor/core';
export * from './electron/app';
export * from './electron/clipboard';
export * from './electron/device';
export * from './electron/filesystem';
export * from './electron/modals';
export * from './electron/network';
export * from './electron/splashscreen';
export declare const registerElectronPlugin: (plugin: WebPlugin) => void;

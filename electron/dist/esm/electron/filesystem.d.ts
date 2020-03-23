import { WebPlugin, CopyOptions, CopyResult, FileReadOptions, FileReadResult, FilesystemPlugin, FileWriteOptions, FileWriteResult, FileDeleteResult, FileAppendOptions, FileAppendResult, ReaddirOptions, ReaddirResult, RenameOptions, RenameResult, MkdirOptions, MkdirResult, GetUriOptions, RmdirOptions, RmdirResult, GetUriResult, StatOptions, StatResult, FileDeleteOptions } from "@capacitor/core";
export declare class FilesystemPluginElectron extends WebPlugin implements FilesystemPlugin {
    NodeFS: any;
    fileLocations: any;
    Path: any;
    constructor();
    private _getPath;
    readFile(options: FileReadOptions): Promise<FileReadResult>;
    writeFile(options: FileWriteOptions): Promise<FileWriteResult>;
    appendFile(options: FileAppendOptions): Promise<FileAppendResult>;
    deleteFile(options: FileDeleteOptions): Promise<FileDeleteResult>;
    mkdir(options: MkdirOptions): Promise<MkdirResult>;
    rmdir(options: RmdirOptions): Promise<RmdirResult>;
    readdir(options: ReaddirOptions): Promise<ReaddirResult>;
    getUri(options: GetUriOptions): Promise<GetUriResult>;
    stat(options: StatOptions): Promise<StatResult>;
    private _copy;
    copy(options: CopyOptions): Promise<CopyResult>;
    rename(options: RenameOptions): Promise<RenameResult>;
}
declare const Filesystem: FilesystemPluginElectron;
export { Filesystem };

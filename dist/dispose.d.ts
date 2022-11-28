export interface IDisposable {
    dispose(): void;
}
export declare function disposeAll(disposables: IDisposable[]): void;
export declare abstract class Disposable {
    private _isDisposed;
    protected _disposables: IDisposable[];
    dispose(): any;
    protected _register<T extends IDisposable>(value: T): T;
    protected get isDisposed(): boolean;
}

import { InitInput, InitOutput, WasmLayoutType as LayoutType } from '../wasm_dist/wasm';
import { Disposable } from './dispose';
export { LayoutType };
export declare function initWasm(module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
export interface Node {
    id?: number;
    width: number;
    height: number;
    parentId?: number;
    x: number;
    y: number;
    children: Node[];
}
export interface InnerNode {
    id: number;
    width: number;
    height: number;
    parentId?: number;
    x: number;
    y: number;
    children: InnerNode[];
}
export declare class TidyLayout extends Disposable {
    private tidy;
    private nextId;
    private root;
    private idToNode;
    static create(type?: LayoutType): Promise<TidyLayout>;
    private constructor();
    changeLayoutType(type: LayoutType): void;
    layout(updated?: boolean): void;
    update(): void;
    set_root(root: Node): InnerNode;
}

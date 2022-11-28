import { Disposable } from './dispose';
import { InnerNode } from './tidy';
export interface ThemeProps {
    dark?: boolean;
    lineColor?: string;
    blockColor?: string;
    borderColor?: string;
}
export declare class Renderer extends Disposable {
    private theme;
    private render;
    private root;
    private group;
    private nodeMap;
    private rectMap;
    private lineSourceMap;
    private lineTargetMap;
    constructor(container: HTMLElement, theme?: ThemeProps);
    init(root: InnerNode): void;
    clear(): void;
    private rescale;
    private addNode;
    private addLine;
    update(): void;
}

import { Node } from './tidy';
export declare function visit<T extends {
    children: T[];
}>(node: T, func: (node: T, depth: number) => void, depth?: number): void;
export declare function createNode(): Node;
export declare function createTree(num: number): Node;
export declare function deleteRandomNode(root: Node, num: number): void;
export declare function insertRandomNodeDepthFirst(root: Node, num?: number): void;
export declare function insertRandomNodeBreadthFirst(root: Node, num?: number): void;
export declare function node(width: number, height: number, children?: Node[]): Node;
export declare function nodeNum(root: Node): number;

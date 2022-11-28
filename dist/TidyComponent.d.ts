import React from 'react';
import { ThemeProps } from './renderer';
import { Node } from './tidy';
export declare enum LayoutTypeStr {
    Tidy = "tidy",
    Basic = "basic",
    LayeredTidy = "layeredTidy"
}
interface Props {
    root: Node;
    layoutType?: LayoutTypeStr;
    updateTrigger?: number;
    style?: React.CSSProperties;
    theme?: ThemeProps;
}
export declare const TidyComponent: ({ root, layoutType, updateTrigger, theme, style, }: Props) => JSX.Element;
export {};

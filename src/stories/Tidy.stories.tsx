import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Node } from '../tidy';
import { LayoutTypeStr, TidyComponent } from '../TidyComponent';
import { createNode, createTree, visit } from '../utils';

export default {
  title: 'Tidy',
  component: TidyComponent,
  argTypes: {
    layoutType: {
      options: [
        LayoutTypeStr.Tidy,
        LayoutTypeStr.Basic,
        LayoutTypeStr.LayeredTidy,
      ],
      defaultValue: LayoutTypeStr.Basic,
    },
  },
};

interface Props {
  layoutType: LayoutTypeStr;
}
/**
 * Primary UI component for user interaction
 */
export const TidyLayout = ({
  layoutType,
  num,
  ...props
}: Props & { num: number }) => {
  const [updateTrigger, setUpdate] = useState(0);
  const [root, setRoot] = useState(() => {
    return createTree(1);
  });
  const prevNum = useRef(0);
  useLayoutEffect(() => {
    if (prevNum.current == 0) {
      setRoot(createTree(num));
    } else if (num < prevNum.current) {
      deleteRandomNode(root, prevNum.current - num);
    } else if (num > prevNum.current) {
      insertRandomNode(root, num - prevNum.current);
    }

    setUpdate((updateTrigger) => updateTrigger + 1);
    prevNum.current = num;
  }, [num]);
  const addNode = useCallback(() => {
    insertRandomNode(root, 1);
    setUpdate((updateTrigger) => updateTrigger + 1);
  }, [root]);

  return (
    <div onClick={addNode}>
      <TidyComponent
        root={root}
        updateTrigger={updateTrigger}
        layoutType={layoutType}
      />
    </div>
  );
};

TidyLayout.argTypes = {
  num: {
    control: { type: 'range', min: 0, max: 400 },
    defaultValue: 200,
  },
};

export const Example0 = () => {
  return (
    <TidyComponent
      root={node(10, 10, [
        node(10, 10, [
          node(10, 10, [
            node(10, 10),
            node(10, 10),
            node(10, 10),
            node(10, 10),
            node(10, 10),
            node(10, 10),
            node(10, 10),
            node(10, 10),
            node(10, 10),
            node(10, 10),
            node(10, 10),
            node(10, 10),
            node(10, 10),
            node(10, 10),
            node(10, 10),
            node(10, 10),
          ]),
        ]),
        node(10, 10, [node(10, 10), node(10, 10), node(10, 10), node(10, 10)]),
        node(10, 10),
        node(10, 40),
      ])}
      updateTrigger={0}
      layoutType={LayoutTypeStr.Tidy}
    />
  );
};

function deleteRandomNode(root: Node, num: number) {
  while (num > 0) {
    visit(root, (node, depth) => {
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].children.length === 0) {
          node.children.splice(i, 1);
          num--;
          if (num === 0) {
            break;
          }
        }
      }
    });
  }
}

function insertRandomNode(root: Node, num: number = 1) {
  let nodes: [Node, number][] = [];
  visit(root, (node, depth) => {
    if (node.children.length < 4) {
      nodes.push([node, depth]);
    }
  });

  nodes.sort((a, b) => -a[1] + b[1]);
  if (nodes.length > 20) {
    const depth = nodes[20][1];
    nodes = nodes.filter(([_, d]) => d >= depth);
  }
  for (let i = 0; i < num; i++) {
    const node = nodes[(Math.random() * nodes.length) | 0][0];
    const child = createNode();
    child.parentId = node.id;
    node.children.push(child);
  }
}

function node(width: number, height: number, children: Node[] = []): Node {
  return {
    x: 0,
    y: 0,
    width,
    height,
    children,
  };
}

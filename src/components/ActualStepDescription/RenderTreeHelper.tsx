import { TransitionProps } from "@material-ui/core/transitions/transition";
import { TreeNode } from "../../logic/treeBuilder/treeNode";
import { useSpring, animated } from "react-spring";
import Collapse from "@material-ui/core/Collapse";
import TreeItem, { TreeItemProps } from "@material-ui/lab/TreeItem";
import TreeView from "@material-ui/lab/TreeView";
import { CollapseIcon, EndIcon, ExpandIcon } from "./styled";
import { makeStyles } from "@material-ui/core/styles";

function TransitionComponent(props: TransitionProps): JSX.Element {
  const style = useSpring({
    from: { opacity: 0, transform: "translate3d(20px,0,0)" },
    to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

const useStyles = makeStyles({
  label: {
    fontFamily: "Scope One",
    color: "#36454c",
  },
});

interface RenderNodeProps {
  treeNode: TreeNode;
  key?: string;
  label?: string;
}
function RenderTreeNode({ treeNode, key, label }: RenderNodeProps): JSX.Element {
  const classes = useStyles();
  const treeItemProps: TreeItemProps = {
    nodeId: treeNode.id,
    label: `${label ?? "Node :"} ${treeNode.id} ${
      treeNode.reward !== undefined ? `Reward: ${treeNode.reward}` : ""
    }`,
  };
  return (
    <TreeItem
      key={key}
      {...treeItemProps}
      TransitionComponent={TransitionComponent}
      classes={{ label: classes.label }}
    >
      {treeNode.children.map((child) => (
        <RenderTreeNode key={child.id} treeNode={child} />
      ))}
    </TreeItem>
  );
}

interface RenderTreeProps {
  treeRoot: TreeNode;
  label?: string;
}

export function RenderTree({ treeRoot, label }: RenderTreeProps): JSX.Element {
  return (
    <TreeView
      defaultEndIcon={<EndIcon />}
      defaultCollapseIcon={<CollapseIcon />}
      defaultExpandIcon={<ExpandIcon />}
    >
      <RenderTreeNode label={label} treeNode={treeRoot} />
    </TreeView>
  );
}

import { TreeBuilder, TreeBuildParams } from "../treeBuilder/treeBuilder";
import { TreeNode } from "../treeBuilder/treeNode";
import { MonteCarloTreeSearch, MonteCarloTreeSearchHyperParams } from "./solver";

export type RunParams = TreeBuildParams & MonteCarloTreeSearchHyperParams;
export class Runner {
  static run(runParams: RunParams): TreeNode {
    const tree = TreeBuilder.build(runParams);
    const solver = new MonteCarloTreeSearch();
    return solver.run(tree, runParams);
  }
}
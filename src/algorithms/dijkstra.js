import PriorityQueue from "../util/PriorityQueue";

export function dijkstra(grid, startNode) {
  var queue = new PriorityQueue(
    (a, b) => cost[a.row][a.col] < cost[b.row][b.col]
  );

  let cost = Array(grid.length)
    .fill(0)
    .map(n => new Array(grid[0].length).fill(null));

  cost[startNode.row][startNode.col] = 0;

  let visited = [];

  queue.push(startNode);

  while (!queue.isEmpty()) {
    let curr = queue.pop();

    visited.push(curr);

    //Early exit
    if (curr.isFinish) {
      return visited;
    }

    let nextNodes = getNeighbors(curr, grid);

    for (const node of nextNodes) {
      let new_cost = cost[curr.row][curr.col] + 1;
      if (
        (node.isFinish || !node.isWall) &&
        (cost[node.row][node.col] == null ||
          new_cost < cost[node.row][node.col])
      ) {
        cost[node.row][node.col] = new_cost;
        node.previousNode = curr;
        queue.push(node);
      }
    }
  }

  return visited;
}

function getNeighbors(node, grid) {
  const neighbors = [];
  const { row, col } = node;
  //Up
  if (row > 0) neighbors.push(grid[row - 1][col]);
  //Down
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  //Left
  if (col > 0) neighbors.push(grid[row][col - 1]);
  //Right
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors;
}
// Backtracks from the finishNode to find the shortest path.
// Only works when called *after* the dijkstra method above.
export function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}

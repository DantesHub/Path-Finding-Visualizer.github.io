import React, { Component } from "react";
import Node from "./Node/Node";
import { connect } from "react-redux";
import { dijkstra, getNodesInShortestPathOrder } from "../algorithms/dijkstra";
import { aStar, getNodesInShortestPathOrderA } from "../algorithms/aStar";
import { dfs, getNodesInShortestPathOrderDFS } from "../algorithms/dfs";
import { bfs, getNodesInShortestPathOrderBFS } from "../algorithms/bfs";

import "./PathfindingVisualizer.css";

const START_NODE_ROW = 14;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 14;
const FINISH_NODE_COL = 40;
const ROW_NUMBERS = 30;
const COL_NUMBERS = 55;

class PathfindingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      onStartNode: false,
      startNode: [START_NODE_ROW, START_NODE_COL],
      onFinishNode: false,
      finishNode: [FINISH_NODE_ROW, FINISH_NODE_COL],
      mouseIsPressed: false
    };
  }

  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({ grid });
  }

  componentDidUpdate(previousProps) {
    if (this.props.button === "visualize" && this.props.algo === "dijkstra") {
      this.visualizeDijkstra();
    } else if (
      this.props.button === "visualize" &&
      this.props.algo === "aStar"
    ) {
      this.visualizeAStar();
    } else if (this.props.button === "visualize" && this.props.algo === "dfs") {
      this.visualizeDFS();
    } else if (this.props.button === "visualize" && this.props.algo === "bfs") {
      this.visualizeBFS();
    } else if (this.props.button === "clear") {
      if (previousProps.button !== this.props.button) {
        this.clearBoard();
      }
    }
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid, mouseIsPressed: true });
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid });
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
  }

  animateSearch(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, 10 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, 50 * i);
    }
  }

  clearBoard() {
    const { grid, startNode, finishNode } = this.state;
    for (let row = 0; row < ROW_NUMBERS; row++) {
      for (let col = 0; col < COL_NUMBERS; col++) {
        grid[row][col].distance = Infinity;
        grid[row][col].isWall = false;
        grid[row][col].heuristic = 0;
        grid[row][col].visited = false;
        grid[row][col].parent = null;
        grid[row][col].seen = false;
        if (grid[row][col] === grid[startNode[0]][startNode[1]]) {
          document.querySelector(`#node-${row}-${col}`).className =
            "node node-start";
        } else if (grid[row][col] === grid[finishNode[0]][finishNode[1]]) {
          document.querySelector(`#node-${row}-${col}`).className =
            "node node-finish";
        } else {
          document.querySelector(`#node-${row}-${col}`).className = "node";
        }
      }
    }
  }

  visualizeDijkstra() {
    const { grid } = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dijkstra(grid, startNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animateSearch(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  visualizeDFS() {
    const { grid } = this.state;
    console.log(grid[14]);
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = dfs(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrderDFS(finishNode);
    this.animateSearch(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  visualizeAStar() {
    const { grid } = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = aStar(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrderA(finishNode);
    this.animateSearch(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  visualizeBFS() {
    const { grid } = this.state;
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visitedNodesInOrder = bfs(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrderBFS(finishNode);
    this.animateSearch(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  render() {
    const { grid, mouseIsPressed } = this.state;
    return (
      <React.Fragment>
        <div className='grid'>
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const { row, col, isFinish, isStart, isWall } = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                      row={row}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 30; row++) {
    const currentRow = [];
    for (let col = 0; col < 55; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};
const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null
  };
};
const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

const mapStateToProps = state => ({
  button: state.buttons.button,
  algo: state.algorithms.algo
});

export default connect(mapStateToProps)(PathfindingVisualizer);

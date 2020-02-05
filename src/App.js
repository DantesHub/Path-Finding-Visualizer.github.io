import React from "react";
import PathfindingVisualizer from "./PathFindingVisualizer/PathfindingVisualizer";
import "./App.css";
import Header from "./components/MainHeader";
function App() {
  return (
    <div className='App'>
      <Header></Header>
      <PathfindingVisualizer> </PathfindingVisualizer>
    </div>
  );
}

export default App;

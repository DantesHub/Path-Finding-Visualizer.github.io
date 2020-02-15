import React from "react";
import PathfindingVisualizer from "./PathFindingVisualizer/PathfindingVisualizer";
import "./App.css";
import Header from "./components/MainHeader";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header></Header>
        <h3 style={{ marginTop: "5rem" }}>Drag around grid to add walls</h3>
        <PathfindingVisualizer> </PathfindingVisualizer>
      </div>
    </Provider>
  );
}

export default App;

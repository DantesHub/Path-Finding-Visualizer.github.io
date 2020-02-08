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
        <PathfindingVisualizer> </PathfindingVisualizer>
      </div>
    </Provider>
  );
}

export default App;

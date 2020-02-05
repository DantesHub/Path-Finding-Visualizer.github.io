import React from "react";
import "./MainHeader.css";
import MainButtons from "./MainButtons";
import Buttons from "./Buttons";

const MainHeader = () => {
  return (
    <React.Fragment>
      <MainButtons>
        <button className='main-navigation__menu-btn'></button>
        <h2 className='main-navigation__title'>PathFinding Visualizer</h2>
        <nav className='main-navigation__header-nav'>
          <Buttons />
        </nav>
      </MainButtons>
    </React.Fragment>
  );
};

export default MainHeader;

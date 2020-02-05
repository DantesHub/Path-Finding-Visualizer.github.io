import React from "react";
import "./MainButtons.css";

const MainButtons = props => {
  return <header className='main-header'>{props.children}</header>;
};

export default MainButtons;

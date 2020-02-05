import React from "react";
import "./Buttons.css";
import DropDown from "./Buttons/DropDownButton";
const Buttons = props => {
  return (
    <ul className='nav-links'>
      <DropDown className='dropdown' />
      <li>
        <button>Testing</button>
      </li>
      <li>
        <button>Testin2</button>
      </li>
      <li>
        <button>LOGOUT</button>
      </li>
      <li>
        <button>LOGOUT</button>
      </li>
    </ul>
  );
};
export default Buttons;

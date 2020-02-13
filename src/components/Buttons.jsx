import React from "react";
import PropTypes from "prop-types";
import "./Buttons.css";
import { connect } from "react-redux";
import DropDownAlgorithms from "./Buttons/DropDownAlgorithms";
import DropDownSpeeds from "./Buttons/DropDownSpeeds";
import { clearBoard } from "../actions/ClearBoard";
import { visualize } from "../actions/Visualize";
const Buttons = ({ visualize, clearBoard }) => {
  return (
    <ul className='nav-links'>
      <DropDownAlgorithms className='dropdown' />
      <li>
        <button onClick={visualize}>Vizualize</button>
      </li>
      <li>
        <button onClick={clearBoard}>Clear Board</button>
      </li>
      <li>
        <DropDownSpeeds className='dropdown' />
      </li>
    </ul>
  );
};

Buttons.propTypes = {
  visualize: PropTypes.func.isRequired,
  clearBoard: PropTypes.func.isRequired
};

export default connect(null, { visualize, clearBoard })(Buttons);

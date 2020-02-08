import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Buttons.css";
import { connect } from "react-redux";
import DropDown from "./Buttons/DropDownButton";
import { visualize } from "../actions/Visualize";
const Buttons = ({ visualize }) => {
  const vizFunc = () => {
    visualize();
  };
  return (
    <ul className='nav-links'>
      <DropDown className='dropdown' />
      <li>
        <button onClick={vizFunc()}>Vizualize</button>
      </li>
      <li>
        <button>Clear Board</button>
      </li>
      <li>
        <DropDown className='dropdown' />
      </li>
    </ul>
  );
};

Buttons.propTypes = {
  visualize: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  algo: state.algo
});
export default connect(mapStateToProps, { visualize })(Buttons);

import React from "react";
import "./MainHeader.css";
import MainButtons from "./MainButtons";
import Buttons from "./Buttons";
import { connect } from "react-redux";

class MainHeader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainButtons>
          <button className='main-navigation__menu-btn'></button>
          <h2 className='main-navigation__title'>Path Finding Visualizer</h2>
          <nav className='main-navigation__header-nav'>
            <Buttons />
          </nav>
        </MainButtons>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(MainHeader);

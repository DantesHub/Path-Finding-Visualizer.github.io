import React from "react";
import "./MainHeader.css";
import MainButtons from "./MainButtons";
import Buttons from "./Buttons";
import { connect } from "react-redux";

class MainHeader extends React.Component {
  render() {
    console.log(this.props.algorithms);
    return (
      <React.Fragment>
        <MainButtons>
          <button className='main-navigation__menu-btn'></button>
          <h2 className='main-navigation__title'>{this.props.algorithms}</h2>
          <nav className='main-navigation__header-nav'>
            <Buttons />
          </nav>
        </MainButtons>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  algo: state.algorithms
});

export default connect(mapStateToProps)(MainHeader);

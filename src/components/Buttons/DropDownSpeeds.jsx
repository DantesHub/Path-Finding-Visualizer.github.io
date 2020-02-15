import React from "react";
import "./DropDownButton.css";
import { connect } from "react-redux";
import { chooseSpeed } from "../../actions/ChooseSpeed";

class DropDownSpeeds extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
      fast: true,
      medium: false,
      slow: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }
  toggleClass(speed) {
    this.props.chooseSpeed(speed);
    if (speed === "slow") {
      this.setState({
        slow: true,
        medium: false,
        fast: false
      });
    } else if (speed === "medium") {
      this.setState({
        slow: false,
        medium: true,
        fast: false
      });
    } else if (speed === "fast") {
      this.setState({
        slow: false,
        medium: false,
        fast: true
      });
    }
  }

  render() {
    return (
      <div className='dropdown'>
        <div className='button' onClick={this.showDropdownMenu}>
          Speed{" "}
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <div
                className={this.state.fast ? "active" : null}
                onClick={() => this.toggleClass("fast")}
              >
                Fast
              </div>
            </li>
            <li>
              <div
                className={this.state.medium ? "active" : null}
                onClick={() => this.toggleClass("medium")}
              >
                Medium
              </div>
            </li>
            <li>
              <div
                className={this.state.slow ? "active" : null}
                onClick={() => this.toggleClass("slow")}
              >
                Slow
              </div>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default connect(null, { chooseSpeed })(DropDownSpeeds);

import React from "react";
import "./DropDownButton.css";

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false
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

  render() {
    return (
      <div className='dropdown'>
        <div className='button' onClick={this.showDropdownMenu}>
          Speed{" "}
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <div className='active dijkstra'>Fast</div>
            </li>
            <li>
              <div>Medium</div>
            </li>
            <li>
              <div>Slow</div>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;

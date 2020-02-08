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
          Algorithms{" "}
        </div>

        {this.state.displayMenu ? (
          <ul>
            <li>
              <a className='active dijkstra' href='#Create Page'>
                dijkstra's algo
              </a>
            </li>
            <li>
              <a href='#Manage Pages'>Manage Pages</a>
            </li>
            <li>
              <a href='#Create Ads'>Create Ads</a>
            </li>
            <li>
              <a href='#Manage Ads'>Manage Ads</a>
            </li>
            <li>
              <a href='#Activity Logs'>Activity Logs</a>
            </li>
            <li>
              <a href='#Setting'>Setting</a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;

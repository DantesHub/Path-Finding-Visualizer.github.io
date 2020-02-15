import React from "react";
import "./DropDownButton.css";
import { connect } from "react-redux";
import { chooseAlgo } from "../../actions/ChooseAlgo";

class DropDownAlgorithms extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
      dActive: true,
      bfsActive: false,
      dfsActive: false,
      aStarActive: false
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

  toggleClass(algo) {
    this.props.chooseAlgo(algo);
    if (algo === "dijkstra") {
      this.setState({
        dActive: true,
        aStarActive: false,
        bfsActive: false,
        dfsActive: false
      });
    } else if (algo === "aStar") {
      this.setState({
        aStarActive: true,
        bfsActive: false,
        dfsActive: false,
        dActive: false
      });
    } else if (algo === "bfs") {
      this.setState({
        bfsActive: true,
        dfsActive: false,
        dActive: false,
        aStarActive: false
      });
    } else if (algo === "dfs") {
      this.setState({
        dfsActive: true,
        dActive: false,
        aStarActive: false,
        bfsActive: false
      });
    }
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
              <div
                className={this.state.dActive ? "active" : null}
                onClick={() => this.toggleClass("dijkstra")}
              >
                dijkstra
              </div>
            </li>
            <li>
              <div
                className={this.state.bfsActive ? "active" : null}
                onClick={() => this.toggleClass("bfs")}
              >
                BFS
              </div>
            </li>
            <li>
              <div
                className={this.state.dfsActive ? "active" : null}
                onClick={() => this.toggleClass("dfs")}
              >
                DFS
              </div>
            </li>
            <li>
              <div
                className={this.state.aStarActive ? "active" : null}
                onClick={() => this.toggleClass("aStar")}
              >
                A*
              </div>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default connect(null, { chooseAlgo })(DropDownAlgorithms);

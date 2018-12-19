import React, { Component } from "react";
import "./body.css";
class Body extends Component {
  state = {
    xoro: ["", "", "", "", "", "", "", "", ""],
    fill: "o",
    text: "",
    win: false
  };
  win = () => {
    let items = this.state.xoro;
    let winner = "";
    for (var i = 0; i < 3; i++) {
      if (
        items[i * 3] === items[i * 3 + 1] &&
        items[i * 3 + 1] === items[i * 3 + 2] &&
        items[i * 3] !== ""
      ) {
        winner = items[i * 3];
      } else if (
        items[i] === items[i + 3] &&
        items[i] === items[i + 6] &&
        items[i] !== ""
      ) {
        winner = items[i];
      } else if (
        items[0] === items[4] &&
        items[0] === items[8] &&
        items[0] !== ""
      ) {
        winner = items[0];
      } else if (
        items[2] === items[4] &&
        items[2] === items[6] &&
        items[2] !== ""
      ) {
        winner = items[2];
      }
    }
    if (winner !== "") {
      this.setState({
        ...this.state,
        fill: "",
        text: winner + "wins",
        win: true
      });
    } else if (!this.state.xoro.includes("")) {
      this.setState({
        ...this.state,
        fill: "",
        text: "Draw",
        win: true
      });
    }
  };
  change = value => {
    const items = this.state.xoro;
    let newfill = this.state.fill;
    if (items[value] === "") {
      items[value] = this.state.fill;
      newfill = this.state.fill === "x" ? "o" : "x";
    }
    this.setState({
      ...this.state,
      xoro: items,
      fill: newfill,
      text: this.state.text
    });
    this.win();
  };
  newgame = () => {
    let items = ["", "", "", "", "", "", "", "", ""];
    let newfill = "o";
    this.setState({
      ...this.state,
      xoro: items,
      fill: newfill,
      text: "",
      win: false
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="cell" onClick={() => this.change(0)}>
            <label>{this.state.xoro[0]}</label>
          </div>
          <div className="cell" onClick={() => this.change(1)}>
            <label>{this.state.xoro[1]}</label>
          </div>
          <div className="cell" onClick={() => this.change(2)}>
            <label>{this.state.xoro[2]}</label>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="cell" onClick={() => this.change(3)}>
            <label>{this.state.xoro[3]}</label>
          </div>

          <div className="cell" onClick={() => this.change(4)}>
            <label>{this.state.xoro[4]}</label>
          </div>

          <div className="cell" onClick={() => this.change(5)}>
            <label>{this.state.xoro[5]}</label>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="cell" onClick={() => this.change(6)}>
            <label>{this.state.xoro[6]}</label>
          </div>
          <div className="cell" onClick={() => this.change(7)}>
            <label>{this.state.xoro[7]}</label>
          </div>
          <div className="cell" onClick={() => this.change(8)}>
            <label>{this.state.xoro[8]}</label>
          </div>
        </div>
        <div className="newgame" onClick={() => this.newgame()}>
          New Game
        </div>

        <div className={this.state.win ? "win winner" : "win"}>
          {this.state.text}
        </div>
      </div>
    );
  }
}

export default Body;

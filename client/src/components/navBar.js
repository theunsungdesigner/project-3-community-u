import { Link } from "react-router-dom";
import React, { Component } from "react";
const navBar = ["Contact-us", "Donations", "Start a new community"];
export default class NavBar extends Component {
  render() {
    return (
      <div className="Community-U">
        <h1>Community-U</h1>
        <h3>"Platform for Community Service"</h3>
      </div>
    );
  }
}

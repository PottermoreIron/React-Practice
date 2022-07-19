import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
export default class MyNavLink extends Component {
  render() {
    const { highlighted, plain } = this.props;
    // console.log(highlighted, plain);
    return (
      <NavLink
        className={({ isActive }) => (isActive ? highlighted : plain)}
        {...this.props}
      />
    );
  }
}

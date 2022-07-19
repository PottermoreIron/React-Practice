import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import MyNavLink from "./components/MyNavLink";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>React Router Demo</h2>
        </div>
        <div>
          <MyNavLink to="/about" highlighted="a" plain="b">
            About
          </MyNavLink>
          <MyNavLink to="/home" highlighted="a" plain="b">
            Home
          </MyNavLink>
        </div>
        <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
    );
  }
}

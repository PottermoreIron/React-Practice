import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  handleKeyUp = (e) => {
    const { keyCode, target } = e;
    if (keyCode !== 13) return;
    if (target.value.trim() === "") return;
    const todoObj = { id: nanoid(), name: target.value, done: false };
    this.props.addTodo(todoObj);
    target.value = "";
  };

  render() {
    return (
      <div>
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}

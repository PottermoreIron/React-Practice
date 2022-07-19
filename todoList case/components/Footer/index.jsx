import React, { Component } from "react";

export default class Footer extends Component {
  handleCheckAll = (e) => {
    this.props.checkAllTodo(e.target.checked);
  };
  handleClearAllDone = () => {
    this.props.clearAllDone();
  };
  render() {
    const { todos } = this.props;
    const doneCnt = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    const totalCnt = todos.length;
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={doneCnt === totalCnt && totalCnt !== 0 ? true : false}
            onChange={this.handleCheckAll}
          />
          <span>
            <span>已完成{doneCnt}</span>/全部{totalCnt}
          </span>
          <button onClick={this.handleClearAllDone}>清除已完成任务</button>
        </label>
      </div>
    );
  }
}

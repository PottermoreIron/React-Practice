import React, { Component } from "react";

import {
  createIncrementAction,
  createDecrementAction,
} from "../../redux/actions/count";
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";

class Count extends Component {
  increment = () => {
    const number = Number(this.selectNumber.value);
    this.props.increment(number);
  };
  decrement = () => {
    const number = Number(this.selectNumber.value);
    this.props.decrement(number);
  };
  incrementIfOdd = () => {
    const count = this.props.count;
    if (count % 2 !== 0) {
      this.increment();
    }
  };
  incrementAsync = () => {
    setTimeout(() => {
      this.increment();
    }, 1000);
  };
  render() {
    return (
      <div>
        <h1>我是Count组件</h1>
        <h2>
          当前求和为:{this.props.count},当前人数为:{this.props.cntP}
        </h2>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}

export default connect(
  (state) => ({ count: state.count, cntP: state.persons.length }),
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
  }
)(Count);

import React, { Component } from "react";
import store from "../../redux/store";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

export default class Count extends Component {
  // componentDidMount() {
  //   // 检测redux中状态是否发生变化，只要变化就会触发render
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }
  increment = () => {
    const number = Number(this.selectNumber.value);
    store.dispatch(createIncrementAction(number));
  };
  decrement = () => {
    const number = Number(this.selectNumber.value);
    store.dispatch(createDecrementAction(number));
  };
  incrementIfOdd = () => {
    const count = store.getState();
    if (count % 2 !== 0) {
      this.increment();
    }
  };
  incrementAsync = () => {
    // setTimeout(() => {
    //   this.increment();
    // }, 1000);

    const number = Number(this.selectNumber.value);
    store.dispatch(createIncrementAsyncAction(number, 1000));
  };
  render() {
    return (
      <div>
        <h1>当前求和为:{store.getState()}</h1>
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

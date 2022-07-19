// import React, { Component } from "react";
// export default class App extends Component {
//   state = { count: 0 };
//   add = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   render() {
//     return (
//       <div>
//         <h2>当前求和为{this.state.count}</h2>
//         <button onClick={this.add}>+1</button>
//       </div>
//     );
//   }
// }
import React from "react";
import root from "./index";

export default function App() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("Tom");
  const myRef = React.useRef();

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  function add() {
    setCount(count + 1);
  }
  function changeName() {
    setName("Jerry");
  }
  function unmount() {
    root.unmount();
  }
  function show() {
    console.log(myRef.current.value);
  }

  return (
    <div>
      <input type="text" ref={myRef}></input>
      <h2>当前求和为{count}</h2>
      <h2>我的名字是{name}</h2>
      <button onClick={add}>+1</button>
      <button onClick={changeName}>改名</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>提示</button>
    </div>
  );
}

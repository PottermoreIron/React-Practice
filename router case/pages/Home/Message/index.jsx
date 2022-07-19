import React, { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Detail } from "./Detail";

export default class Message extends Component {
  state = {
    MessageArr: [
      {
        id: "01",
        title: "消息1",
      },
      {
        id: "02",
        title: "消息2",
      },
      {
        id: "03",
        title: "消息3",
      },
    ],
  };
  replaceShow = (id, title) => {
    // 实现跳转到detail页面，且为replace跳转
    // this.props.history.replace(`/home/message/detail/${id}/${title}`);
    console.log(this.props);
  };

  render() {
    const { MessageArr } = this.state;
    return (
      <div>
        <ul>
          {MessageArr.map((item) => {
            return (
              <li key={item.id}>
                {/* 向路由组件传递params参数 */}
                <Link to={`/home/message/detail/${item.id}/${item.title}`}>
                  {item.title}
                </Link>
                <button>push查看</button>
                <button onClick={() => this.replaceShow(item.id, item.title)}>
                  replace查看
                </button>
                {/* 向路由组件传递search参数 */}
                {/* <Link
                  to={`/home/message/detail?id=${item.id}&title=${item.title}`}
                >
                  {item.title}
                </Link> */}
                {/* 向路由组件传递state参数 */}
                {/* <Link
                  replace={true}
                  to={"/home/message/detail"}
                  state={{ id: item.id, title: item.title }}
                >
                  {item.title}
                </Link> */}
              </li>
            );
          })}
        </ul>
        <hr />
        <Routes>
          {/* 声明接收params参数 */}
          <Route path="detail/:id/:title" element={<Detail />} />
          {/* search参数无需声明接收 */}
          <Route path="detail" element={<Detail />} />
          {/* state参数无需声明接收 */}
          {/* <Route path="detail" element={<Detail />} /> */}
        </Routes>
      </div>
    );
  }
}

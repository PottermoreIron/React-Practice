import React, { Component } from "react";
import PubSub from "pubsub-js";
export default class List extends Component {
  // 初始化状态,users为空数组
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: "",
  };

  componentDidMount() {
    PubSub.subscribe("search", (_, stateObj) => {
      this.setState(stateObj);
    });
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state;
    return (
      <div style={{ display: "flex" }}>
        {isFirst ? (
          <h2>欢迎使用</h2>
        ) : isLoading ? (
          <h2>加载中...</h2>
        ) : err ? (
          <h2>{err.message}</h2>
        ) : (
          users.map((userObj) => {
            return (
              <div key={userObj.id}>
                <a href={userObj.html_url}>
                  <img
                    src={userObj.avatar_url}
                    style={{ width: 100 + "px" }}
                    alt="test"
                  ></img>
                </a>
                <p>{userObj.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

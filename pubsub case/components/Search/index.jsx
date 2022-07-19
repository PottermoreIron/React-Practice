import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";
export default class Search extends Component {
  // 根据输入搜索
  search = () => {
    const { value } = this.keyWord;
    PubSub.publish("search", { isFirst: false, isLoading: true });
    axios.get("http://localhost:3000/api1/search/users?q=" + value).then(
      (response) => {
        PubSub.publish("search", {
          isLoading: false,
          users: response.data.items,
        });
      },
      (error) => {
        PubSub.publish("search", { isLoading: false, err: error.message });
      }
    );
  };
  render() {
    return (
      <div>
        <section>
          <h3>Search GitHub Users</h3>
          <div>
            <input
              ref={(c) => (this.keyWord = c)}
              type="text"
              placeholder="enter the name u search"
            />
            <button onClick={this.search}>Search</button>
          </div>
        </section>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Button } from "antd";
import { WechatOutlined } from "@ant-design/icons";
import "antd/dist/antd.min.css";
export default class App extends Component {
  render() {
    return (
      <div>
        App
        <Button type="primary">按钮1</Button>
        <Button type="link">按钮2</Button>
        <Button type="dashed" icon={<WechatOutlined />}>
          按钮3
        </Button>
      </div>
    );
  }
}

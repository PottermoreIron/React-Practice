import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { createAddPersonFunction } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    // 清空输入框
    this.nameNode.value = "";
    this.ageNode.value = "";
    const personObj = { id: nanoid(), name, age };
    this.props.addPerson(personObj);
  };
  render() {
    return (
      <div>
        <h1>我是Person组件,求和为{this.props.s}</h1>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="输入名字"
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="输入年龄"
        />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.personList.map((person) => (
            <li key={person.id}>
              <span>
                {person.name}--{person.age}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default connect(
  (state) => ({ personList: state.persons, s: state.count }),
  {
    addPerson: createAddPersonFunction,
  }
)(Person);

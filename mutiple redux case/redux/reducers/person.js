import { ADD_PERSON } from "../constant";
const initState = [
  { id: "001", name: "John", age: 30 },
  { id: "002", name: "Mary", age: 25 },
];
export default function personReducer(preState = initState, action) {
  const { type, person } = action;
  switch (type) {
    case ADD_PERSON:
      return [person, ...preState];
    default:
      return preState;
  }
}

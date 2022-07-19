import { INCREMENT, DECREMENT } from "../constant";
const initState = 0;
export default function countReducer(preState = initState, action) {
  const { type, number } = action;
  switch (type) {
    case INCREMENT:
      return preState + number;
    case DECREMENT:
      return preState - number;
    default:
      return preState;
  }
}

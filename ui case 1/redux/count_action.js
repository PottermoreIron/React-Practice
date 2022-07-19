import { INCREMENT, DECREMENT } from "./constant";
export const createIncrementAction = (number) => ({ type: INCREMENT, number });
export const createDecrementAction = (number) => ({ type: DECREMENT, number });
export const createIncrementAsyncAction = (number, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(number));
    }, time);
  };
};

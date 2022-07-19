// 创建redux中的store对象
import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./reducers/count";
import personReducer from "./reducers/person";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  count: countReducer,
  persons: personReducer,
});
export default createStore(rootReducer, applyMiddleware(thunk));

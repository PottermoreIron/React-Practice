引入Count的UI组件;
import CountUI from "../../components/Count";
import {
  createIncrementAction,
  createDecrementAction,
} from "../../redux/count_action";
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";

// function mapStateToProps(state) {
//   return { count: state };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     increment: (number) => {
//       dispatch(createIncrementAction(number));
//     },
//     decrement: (number) => {
//       dispatch(createDecrementAction(number));
//     },
//   };
// }

// export default connect(
//   (state) => ({ count: state }),
//   (dispatch) => ({
//     increment: (number) => {
//       dispatch(createIncrementAction(number));
//     },
//     decrement: (number) => {
//       dispatch(createDecrementAction(number));
//     },
//   })
// )(CountUI);

export default connect((state) => ({ count: state }), {
  increment: createIncrementAction,
  decrement: createDecrementAction,
})(CountUI);

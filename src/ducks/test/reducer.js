import { ADD } from "./consts";

export function testReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

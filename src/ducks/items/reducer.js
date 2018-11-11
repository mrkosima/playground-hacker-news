import { ITEM_LOADED, ITEM_REMOVE } from "./consts";

export function itemsReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case ITEM_REMOVE:
      const { [payload]: toClear, ...newState } = state;
      return newState;
    case ITEM_LOADED:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}

import { ITEM_LOADED, ITEM_REMOVE } from "./consts";

export function itemsReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case ITEM_LOADED:
      return { ...state, [action.payload.id]: action.payload };
    case ITEM_REMOVE:
      const { [payload.toString()]: toClear, ...newState } = state; 
      return newState;
    default:
      return state;
  }
}

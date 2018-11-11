import { STORIES_LOADING, STORIES_LOADED } from "./consts";

const initialState = {
  ids: [],
  loading: false,
  currentPage: 0,
};

export function storiesReducer(state = initialState, action) {
  switch (action.type) {
    case STORIES_LOADING:
      return { ...state, loading: true };
    case STORIES_LOADED:
      return { ...state, ids: action.payload, loading: false };
    default:
      return state;
  }
}

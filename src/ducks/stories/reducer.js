import { STORIES_LOADING, STORIES_LOADED, STORIES_NEXT_PAGE, STORIES_CLEAR } from "./consts";

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
      return { ...state, ids: action.payload, loading: false, currentPage: 0 };
    case STORIES_NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };
    case STORIES_CLEAR:
      return { ...state, ids: [], loading: false, currentPage: 0 };
    default:
      return state;
  }
}

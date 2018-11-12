import { storiesReducer } from "./reducer";
import * as types from "./consts";

describe("ducks/stories/reducer", () => {
  let initialState;

  beforeEach(() => {
    initialState = { currentPage: 0, ids: [], loading: false };
  });

  it("should return initialState", () => {
    const actualState = storiesReducer(undefined, { type: "noop" });

    expect(actualState).toEqual(initialState);
  });

  it("should return loading state", () => {
    const expectedState = { ...initialState, loading: true };
    const actualState = storiesReducer(initialState, { type: types.STORIES_LOADING });

    expect(actualState).toEqual(expectedState);
  });

  it("should return state with loaded stories", () => {
    const expectedState = { ...initialState, loading: false, ids: [1, 2, 3, 4, 5] };
    initialState.loading = true;
    const actualState = storiesReducer(initialState, {
      type: types.STORIES_LOADED,
      payload: [1, 2, 3, 4, 5]
    });

    expect(actualState).toEqual(expectedState);
  });

  it("should clear state", () => {
    const expectedState = { ...initialState };
    initialState.currentPage = 7;
    initialState.ids = [1, 2, 3, 4, 5];
    initialState.loading = true;
    const actualState = storiesReducer(initialState, { type: types.STORIES_CLEAR });
    expect(actualState).toEqual(expectedState);
  });

  it("should increment current page", () => {
    const expectedState = { ...initialState, currentPage: 4 };
    initialState.currentPage = 3;
    const actualState = storiesReducer(initialState, { type: types.STORIES_NEXT_PAGE });

    expect(actualState).toEqual(expectedState);
  });

  it("should not modify state for not stories action", () => {
    const expectedState = { test: 123 };
    const actualState = storiesReducer(expectedState, { type: "noop" });

    expect(actualState).toBe(expectedState);
  });
});

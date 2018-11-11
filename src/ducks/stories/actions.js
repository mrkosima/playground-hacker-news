import { STORIES_LOADING, STORIES_LOADED } from "./consts";
import { fetchTopStories } from "../../api/HackerService";

export const storiesLoading = () => ({
  type: STORIES_LOADING
});

export const storiesLoaded = stories => ({
  type: STORIES_LOADED,
  payload: stories
});

export const loadStories = () => dispatch => {
  dispatch(storiesLoading());
  fetchTopStories().then(stories => dispatch(storiesLoaded(stories)));
};

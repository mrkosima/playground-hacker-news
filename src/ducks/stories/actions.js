import { STORIES_LOADING, STORIES_LOADED, STORIES_NEXT_PAGE, STORIES_CLEAR} from "./consts";
import { fetchTopStories } from "../../api/HackerService";

export const storiesLoading = () => ({
  type: STORIES_LOADING
});

export const storiesLoaded = stories => ({
  type: STORIES_LOADED,
  payload: stories.slice(0, 6)
});

export const nextPage = () => ({
  type: STORIES_NEXT_PAGE,
});

export const clearStories = () => ({
  type: STORIES_CLEAR,
})

export const loadStories = () => dispatch => {
  dispatch(storiesLoading());
  fetchTopStories().then(stories => dispatch(storiesLoaded(stories)));
};

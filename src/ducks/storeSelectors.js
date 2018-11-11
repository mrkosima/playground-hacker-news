const MAX_STORIES_PER_PAGE = 5;

const selectStories = state => state.stories;
const selectStoriesIds = state => selectStories(state).ids;

export const isStoriesLoading = state => selectStories(state).loading;
export const selectStoriesPageIds = (state, page = 0) =>
  selectStoriesIds(state).slice(page * MAX_STORIES_PER_PAGE, (page + 1) * MAX_STORIES_PER_PAGE);

export const selectItems = state => state.items;

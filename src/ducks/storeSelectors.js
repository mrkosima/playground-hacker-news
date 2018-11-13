import { createSelector } from "reselect";

const MAX_STORIES_PER_PAGE = 25;

const selectStories = state => state.stories;
const selectStoriesIds = state => selectStories(state).ids;

export const areStoriesLoading = state => selectStories(state).loading;
export const selectStoriesCurrentPage = state => selectStories(state).currentPage;

export const selectStoriesPageIds = createSelector(
    selectStoriesIds,
    selectStoriesCurrentPage,
    (ids, page) => ids.slice(page * MAX_STORIES_PER_PAGE, (page + 1) * MAX_STORIES_PER_PAGE),
);

export const selectStoriesIdsOnCurrentPage = state => selectStoriesPageIds(state, selectStoriesCurrentPage(state));
export const selectCurrentPageStartIndex = state => selectStoriesCurrentPage(state) * MAX_STORIES_PER_PAGE;
export const selectNextPageEnabled = state => selectStoriesIds(state).length > selectCurrentPageStartIndex(state) + MAX_STORIES_PER_PAGE

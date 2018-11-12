import * as React from "react";
import { StoryItem } from "./StoryItem";
import { connect } from "react-redux";
import { loadStories, nextPage } from "../../ducks/stories/actions";
import { selectStoriesIdsOnCurrentPage, areStoriesLoading, selectNextPageEnabled, selectStoriesCurrentPage, selectCurrentPageStartIndex } from "../../ducks/storeSelectors";

export class StoriesComponent extends React.PureComponent {
  componentDidMount() {
    this.props.loadStories();
  }

  componentWillReceiveProps({ currentPage }) {
    if (currentPage !== this.props.currentPage) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.loading || !this.props.stories ? (
      "...loading"
    ) : (
      <div>
      <ol start={this.props.startIndex + 1}>
        {this.props.stories.map(s => (
          <li key={s}>
            <StoryItem id={s} />
          </li>
        ))}
      </ol>
      {this.props.nextPageEnabled && <button onClick={this.props.nextPage}>More...</button>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: areStoriesLoading(state),
  stories: selectStoriesIdsOnCurrentPage(state),
  moreEnabled: selectNextPageEnabled(state),
  currentPage: selectStoriesCurrentPage(state),
  startIndex: selectCurrentPageStartIndex(state),
  nextPageEnabled: selectNextPageEnabled(state),
});

const mapDispatchToProps = {
  loadStories: loadStories,
  nextPage: nextPage,
};

export const Stories = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoriesComponent);

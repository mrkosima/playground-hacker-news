import * as React from "react";
import { StoryItem } from "./StoryItem";
import { connect } from "react-redux";
import { 
  loadStories, 
  nextPage, 
  clearStories
} from "../../ducks/stories/actions";
import { 
  selectStoriesIdsOnCurrentPage, 
  areStoriesLoading, 
  selectNextPageEnabled, 
  selectStoriesCurrentPage, 
  selectCurrentPageStartIndex 
} from "../../ducks/storeSelectors";

import "./Stories.css";

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
      <div className="stories">
        <ol>
          {this.props.stories.map((s, i) => (
            <li key={s} className="story">
              <StoryItem id={s} storyIndex={this.props.startIndex + i + 1}/>
            </li>
          ))}
        </ol>
        {this.props.nextPageEnabled && <div className="nextPage" onClick={this.props.nextPage}><span>More</span></div>}
      </div>
    );
  }

  componentWillUnmount() {
    this.props.clearStories();
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
  clearStories: clearStories,
};

export const Stories = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoriesComponent);

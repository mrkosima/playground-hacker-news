import * as React from "react";
import { StoryItem } from "./StoryItem";
import { connect } from "react-redux";
import { loadStories } from "../../ducks/stories/actions";
import { selectStoriesPageIds, isStoriesLoading } from "../../ducks/storeSelectors";

export class StoriesComponent extends React.PureComponent {
  componentDidMount() {
    this.props.loadStories();
  }
  render() {
    return this.props.loading || !this.props.stories ? (
      "...loading"
    ) : (
      <ol start={1}>
        {this.props.stories.map(s => (
          <li key={s}>
            <StoryItem id={s} />
          </li>
        ))}
      </ol>
    );
  }
}

const mapStateToProps = state => ({
  loading: isStoriesLoading(state),
  stories: selectStoriesPageIds(state),
});

const mapDispatchToProps = {
  loadStories: loadStories
};

export const Stories = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoriesComponent);

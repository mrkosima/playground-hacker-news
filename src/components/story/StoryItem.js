import * as React from "react";
import { connect } from "react-redux";
import { loadItem, clearItem } from "../../ducks/items/actions";
import { StoryTitle } from "./StoryTitle"
import { StoryDetails } from "./StoryDetails"

export class StoryItemComponent extends React.PureComponent {
  componentDidMount() {
    this.props.loadItem(this.props.id);
  }

  render() {
    if (!this.props.item) {
      return <div>Loading...</div>;
    }
    const { title, url } = this.props.item;
    return (
        <>
            <StoryTitle url={url} title={title}/>
            <StoryDetails {...this.props.item}/>
        </>
    );
  }

  componentWillUnmount() {
    this.props.clearItem(this.props.id);
  }
}

const mapStateToProps = (state, props ) => ({
    item: state.items[props.id] ? state.items[props.id] : undefined
});

const mapDispatchToProps = {
  loadItem,
  clearItem
};

export const StoryItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryItemComponent);

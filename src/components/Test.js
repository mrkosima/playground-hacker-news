import * as React from "react";
import { connect } from "react-redux";
import { add, addAsync } from "../ducks/test/actions";

export class TestComponent extends React.Component {
  render() {
    return <>
        <div>Count: {this.props.count}</div>
        <button onClick={this.props.add}>Add</button>
        <button onClick={this.props.addAsync}>Add async</button>
        </>
  }
}

const mapStateToProps = state => ({
  count: state.test.count
});

const mapDispatchToProps = {
    add,
    addAsync,
};
export const Test = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComponent);

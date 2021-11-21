import React, { Component } from "react";

export class UseEffectclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    document.title = `clicked${this.state.count}`;
  }
  componentDidUpdate(prevProps, prevState) {
    document.title = `clicked${this.state.count}`;
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click me {this.state.count} time
        </button>
      </div>
    );
  }
}

export default UseEffectclass;

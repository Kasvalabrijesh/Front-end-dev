import React, { Component } from "react";

export class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Component updated. New count: ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log("Component is about to unmount!");
  }

  increaseCount = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };
  render() {
    return (
      <div>
        <h2>Logger Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increaseCount}>Increase</button>
      </div>
    );
  }
}

export default Log;

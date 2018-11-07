import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };
  /*constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = " badge m-2 ";
    classes += this.state.value === 0 ? " badge-warning " : " badge-primary ";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;

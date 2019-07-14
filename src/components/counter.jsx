// import react first
// addd a class called "whatever you wanna call it"
// JSX will be compiled by babel
// JSX expressions must have 1 parent element because babel doesnt know how to compile multiple
// get compiled by React.createElement()
// return statement inside render should always have '()'
// if you don't want an extra div, user React.Fragment instead of <div>

import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
            {this.state.tags.map(tag=><li key={tag}>{tag}</li>)} 
            {/* render dynamically first so this.state */}
            {/* .tags is the name of the array */}
            {/* now use the map method and pass tag (tag=><li></li>) and map it to the array items */}
            {/* in jsx, you cant loop through an array so we need to use map method */}
            {/* to map EACH element on the array to render */}
            {/* whenever you use map method to map through array, you need to set key attribute key = {} */}
            {/* key is unique only on that list */}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge-m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;

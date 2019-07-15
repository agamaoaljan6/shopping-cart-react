// import react first
// addd a class called "whatever you wanna call it"
// JSX will be compiled by babel
// JSX expressions must have 1 parent element because babel doesnt know how to compile multiple
// get compiled by React.createElement()
// return statement inside render should always have '()'
// if you don't want an extra div, user React.Fragment instead of <div>
// Install react developer tools in chrome extension

import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value // this changes the '0'
  };

  handleIncrement = product => {
    console.log(product);
    // This is an eventhandler function
    // always name functions/methods on what they're suppose to do
    // to not confuse other developers and yourself
    this.setState({ value: this.state.value + 1 }); // you need to pass an object and property
    // this.setState is a react method
  };

  render() {
    console.log("props", this.props);
    // every react component has a property called 'props'
    // a plain javascript object that includes all the attributes that we set in counters component (counter and value)
    // key wont be part of the components because its a unique attribute
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()} // OnClick is one of the many DOM event properties in JS
          // when you wanna pass something on the event handler,
          // just add arrow function and the object you wanna pass on the eventhandler
          className="btn btn-secondary btn-sm ml-2 mt-2"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge-m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "ZERO" : value;
  }
}

export default Counter;

// CONDITIONAL RENDERING
/**
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>; // this is the case for empty array
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
         {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}  
          {this.state.tags.length === 0 && 'please create a new tag'}  
          to conditionally render content, you can use the (&&) operator  
          first is the condition and then && and then whatever you want to render could be plain text or jsx expression 
          {this.renderTags()} 
          render dynamically first so this.state 
          .tags is the name of the array 
          now use the map method and pass tag (tag=><li></li>) and map it to the array items 
          in jsx, you cant loop through an array so we need to use map method 
          to map EACH element on the array to render 
          whenever you use map method to map through array, you need to set key attribute key = {} 
          key is unique only on that list 
      </ul>
    ); // this is the case if there are elements in the array
    //   {this.renderTags()}  in return method inside render function this is how you call the renderTags() function
  }

*/

// BINDING EVENT HANDLERS
// 'this' behaves differently in javascript compare to other languages
// it can refer to different objects

// constructor() {
//   super();
//   this.handleIncrement = this.handleIncrement.bind(this); // this will always refer to the method that was defined i.e handleIncrement
// because of the bind method.
// this will return a new instance of the handleIncrement
// this will always reference the Counter object
// you need to build a constructor to bind 'this' and user super() to call the constructor
// of the parent class i.e Counter
// }

// The other way to bind 'this' is to convert the eventhandler into an arrow function
// handleIncrement = () => {}

import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the text of the DOM input element
    this.input = React.createRef();
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter a task" ref={this.input} />
        <button
          onClick={() => {
            this.props.addTodoItem(this.input.current.value);
            this.input.current.value = ""; // clear input
          }}
        >
          {" + "}
        </button>
      </div>
    );
  }
}

export default TodoForm;

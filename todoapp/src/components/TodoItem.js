import React, { Component } from "react";

class TodoItem extends Component {

  render() {
    // Get the id and title attributes of the TodoItem considered
    // Desconstructing todo
    const { id, title } = this.props.todo;

    // Styling the todo item - if then else
    const cssStyle = {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };

    return (
      <div style={cssStyle}>
        <p>
          <input type="checkbox"
            onChange={
              // arrow function allows React to run our code later (when the checkbox changes)
              // when React does run it, call markComplete with the id for this todo item
              () => this.props.markComplete(id)
            }
          />{" "}
          {title}  
          {" "}
          <button onClick={() => {this.props.deleteItem(id)}}>
            Delete
          </button>
        </p>
      </div>
    );
  }
}

export default TodoItem;

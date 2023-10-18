import React, { Component } from "react";
import TodoItem from "./TodoItem"; // path
import AddTodo from "./TodoForm";

class TodoParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        { id: 1, title: "Go out", completed: false },
        { id: 2, title: "Go home", completed: false },
        { id: 3, title: "Go to bed", completed: false },
        { id: 4, title: "Do hw", completed: false },
      ],
    };
  }

  //generates random id;
  guid = () => {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  deleteItem = (id) => {
    console.log("Delete from TodoParent " + id);
    // Delete the element with id
    this.setState({
      // Use filter to remove the element with id
      todo: this.state.todo.filter(item => item.id !== id)
    })
  }

  markComplete = (id) => {
    console.log("MarkComplete from TodoParent " + id);
    this.setState(
      {
        todo: this.state.todo.map((item, index) => {
          if (item.id === id) {
            // Only make a copy for the one object that has changed
            item = { ...item, completed: !item.completed };
          }
          // We'll reuse objects that haven't changed and return the toggled object∂
          return item;
        }),
      }
    );
  }

  addTodo = (newTitle) => {
    console.log("addTodo from TodoParent: " + newTitle);
    // Create the element to add with a unique id
    const nextIdNumber = this.state.todo.length + this.guid();
    const newTodoItem = { id: nextIdNumber, title: newTitle, completed: false };
    // Handling asynchronous changes of the state
    //this.setState((state) => ({ todo: [...this.state.todo, newTodoItem] }));
    this.setState({ todo: [...this.state.todo, newTodoItem] });
  };

  // Produce a JSX element to show a single item
  // Notice how makeOneTodoItem is used
  makeOneTodoItem = (todoItemInfo) => (
    <TodoItem
      key={todoItemInfo.id} // React wants a unique 'key' for each item
      todo={todoItemInfo} // A todo item - This is passed to the TodoItem component
      markComplete={this.markComplete} // Function markComplete - This is passed to the TodoItem component
      deleteItem={this.deleteItem}
    />
  );

  render() {
    return (
      <div>
        {
          // Run this function once for each item in the todo array
          this.state.todo.map(this.makeOneTodoItem)
        }
        {
          // Notice how AddTodo is used 
        }
        <AddTodo addTodoItem={this.addTodo} />
      </div>
    );
  }
}

export default TodoParent;

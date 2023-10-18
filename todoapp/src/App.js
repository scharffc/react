import React, { Component } from "react";
import "./App.css";
import TodoParent from "./components/TodoParent";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <TodoParent />
      </div>
    );
  }
}

export default App;

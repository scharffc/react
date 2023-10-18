// Class
// Constructor
// State
// render - Text, 2 buttons + -, the value of the counter

import React from 'react';
import '../App.css';

class Counter extends React.Component {

    // constructor
    constructor(props) {
        super(props);
        // initialization
        this.state = { count: 0 }
    }
    
    decrease = () => {
        console.log("decrease");
        if (this.state.count === 0) {
            console.log("do not change");
        }
        else {
            this.setState({ count: this.state.count - 1 })
            // Handle asynchronous access to the state
            // this.setState((state) => ({count: this.state.count - 1}));
        }
    }

    increase = () => {
        this.setState({ count: this.state.count + 1 })
    }

    // increase

    // render
    // 2 buttons
    // value of the counter
    render() {
        return (
            <div>
                <div>My Counter</div>
                <button onClick={this.decrease}>-</button>
                {this.state.count}
                <button onClick={this.increase}>+</button>
            </div>
        )
    }

}

export default Counter;
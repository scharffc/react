import React from 'react';
import '../App.css';

// Class

class CounterClass extends React.Component {

    // constructor
    constructor(props) {
        super(props);
        // initialization
        this.state = { count: 0 }
    }
    
    decrease = () => {
        this.setState(
                (count) => ({count: this.state.count - 1 })
        )    
    }

    increase = () => {
        this.setState(
                (count) => ({count: this.state.count + 1 })
        ) 
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

export default CounterClass;
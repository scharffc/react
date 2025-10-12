import React, { useState } from 'react';
import '../App.css';

// Lamda and functions to increase and decrease count

const Counter3 = (props) => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count => count+1)
    }

    const decrease = () => {
        setCount(count => count-1)
    }

    return (
        <div>
            <div>My Counter3</div>
            <button onClick={decrease}>
                -
            </button>
            {count}
            <button onClick={increase}>
                +
            </button>
        </div>
    );
}

export default Counter3;
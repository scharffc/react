import React, { useState } from 'react';
import '../App.css';

function Counter1() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>My Counter1</div>
            <button onClick={() => {if (count !== 0) setCount(count - 1)}}>
                -
            </button>
            {count}
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    );
}

export default Counter1;
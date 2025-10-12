import React, { useState } from 'react';
import '../App.css';

// Function and setCount directly in onClick

function Counter1() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>My Counter1</div>
            <button onClick={() => setCount((count) => count - 1)}>
                -
            </button>
            {count}
            <button onClick={() => setCount((count) => count + 1)}>
                +
            </button>
        </div>
    );
}

export default Counter1;
import React, { useState } from 'react';
import '../App.css';

const Counter2 = (props) => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>My Counter2</div>
            <button onClick={() => { if (count !== 0) setCount(count - 1) }}>
                -
            </button>
            {count}
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    );
}

export default Counter2;
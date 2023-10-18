import React, { useState } from 'react';
import '../App.css';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Counter = (props) => {

    // Declare a new state state variable and the function to change the state
    // Destructuring
    const [count, setCount] = useState(0);
    const appHistory = useHistory();

    const decrease = () => {
        setCount(count - 1);
    };

    const increase = () => {
        setCount(count + 1);
    };

    // using push needs to be outside render as this component has a state
    const goHome = () => {
        appHistory.push('/', count); 
    };

    // 2 buttons
    // display count
    return (
        <Container>
            <div><h3>Counter</h3></div>
            <div><em>Look at the url</em></div>
            <Button size="sm" variant="danger" onClick={decrease}>-</Button>
            { } {count} { }
            <Button size="sm" variant="success" onClick={increase}>+</Button>
            <br></br>
            <br></br>
            <Button onClick={goHome}>Click me! </Button>
            <div>
                Click the button to go Home with a state count of {count}
            </div>
        </Container>
    )
}

export default Counter;
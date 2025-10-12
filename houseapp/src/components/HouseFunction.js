import React from 'react';
import '../App.css';

const HouseFunction = (props) => (
    <div>
        My house
        <div>{props.children}</div>
    </div>
) 

export default HouseFunction;
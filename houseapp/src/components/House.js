import React from 'react';
import '../App.css';

const House = (props) => (
    <div>
        My house
        <div>{props.children}</div>
    </div>
) 

export default House;
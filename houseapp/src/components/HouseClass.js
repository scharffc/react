import React from 'react';
import '../App.css';

class HouseClass extends React.Component {

    render() {
        return (
            <div>
                My house
                <div>{this.props.children}</div>
            </div>)
    }
}

export default HouseClass;
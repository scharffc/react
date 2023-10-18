import React from 'react'

import { Form } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import birthday from "../images/birthday.png";

class Home extends React.Component {

    // We will use showAlert to determine if we should show the alert
    constructor(props) {
        super(props);
        this.state = { showAlert: false, dob: null };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (e) => {
        console.log("changeDate");
        this.setState({ showAlert: this.state.showAlert, dob: e.target.value })
    };

    saveDate = (e) => {
        console.log("saveDate");
        this.setState({ showAlert: !this.state.showAlert, dob: this.state.dob });
    };

    render() {
        return (
            <div>
                <h3>Date / Button / Alert / Rounded Image</h3>
                <Container>
                    <Form>
                        <Form.Group controlId="dob">
                            <Form.Label>Select your date of birth</Form.Label>
                            <Form.Control type="date" name="dob" value={this.state.dob || ""} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Button variant="primary" onClick={this.saveDate}>Save the date!</Button>
                        <br></br>
                        < Alert variant="info" show={this.state.showAlert}>
                            The date {this.state.dob} is saved!
                        </Alert >
                    </Form>
                    <br></br>
                    <Image src={birthday} className="border border-primary" width="170" height="170" roundedCircle />
                </Container>
            </div>
        )
    }
}

export default Home;
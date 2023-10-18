import React from "react";
import { Form, Button, Container } from 'react-bootstrap';

class BootstrapSelect extends React.Component {

  render() {
    return (
      <div>
        <h3>Select</h3>
        <Container>
          <Form>
            <Form.Group controlId="selectedCity" >
              <Form.Label>Select a city</Form.Label>
              <Form.Control as="select">
                <option>City 1</option>
                <option>City 2</option>
                <option>City 3</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>

    );
  }
}

export default BootstrapSelect;

import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [state, setState] = useState({
        username: "",
        email: "",
        city: "",
        phone: "",
    });

    // Returns a function that lets you navigate programmatically in the browser in response to user interactions or effects

    const navigate = useNavigate();

    const handleOnSubmit = (event) => {
        event.preventDefault();

        // navigate to another page
        navigate('/welcome', {state: state});

      //  React 5
      //  Add props for the function too
      //  instead of history use useNavigate and receive data with useLocation
      //  props.history.push({
      //      pathname: "/welcome",
      //      state,
      //  });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
        console.log("Name: " + name);
        console.log("Value: " + value);
    };

    return (
        <Container>
            <h3>Home</h3>
            <h6>Welcome to FabShop!</h6>
            <div>Register now!</div>
            <br></br>
            <Form className="register-form" onSubmit={handleOnSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username..."
                        name="username"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Email..."
                        name="email"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="City..."
                        name="city"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Phone..."
                        name="phone"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <br></br>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    )
}

export default Home;
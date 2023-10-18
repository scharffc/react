import { Container, Button } from 'react-bootstrap';
import { useHistory, useParams, useLocation } from 'react-router-dom';

const Contact = (props) => {
    const appHistory = useHistory();
    const { name, city } = useParams();
    const { pathname } = useLocation();
    return (
      <Container>
        <h3>Contact is here</h3>
        <div><em>Look at the url</em></div>
        <Button onClick={() => { appHistory.push('/'); console.log("Button clicked!"); console.log("We are at " + pathname); console.log("The name is: " + name + " from " + city) }}>Click me!</Button>
        <div>Click the button to go Home and consult the console</div>
      </Container>)
  }

  export default Contact;
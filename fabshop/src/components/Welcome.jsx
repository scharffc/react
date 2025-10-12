import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Welcome = () => {

    const appLocation = useLocation();
  
    console.log(appLocation.state.username);
  
    return (
      <Container>
        <h3>Welcome is here</h3>
        You are fabulous {appLocation.state.username} from {appLocation.state.city}!
        <br></br>
      </Container>
    )
  }
  
  export default Welcome;
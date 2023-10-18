import { Container } from 'react-bootstrap';

const Home = (props) => {

    const count = props.location.state;
    let message;
    // undefined when not defined and when definied and not initialized
    if (typeof count === 'undefined') {
      message = <div>Value not yet defined</div>
    } else {
      message = <div>{count}</div>
    }
  
    return (
      <Container>
        <h3>Home is here</h3>
        <div>Counter value is: { }
          {message}
        </div>
        {console.log(props.location.state)}
      </Container>
    )
  }

  export default Home;
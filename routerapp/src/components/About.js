import { Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// First way to write about : by desconstructing the object
const About = ({ match: { params: { name } } }) => (
    <Container>
        <h3>About is here</h3>
        <div><em>Look at the url</em></div>
        Name : {name}
        {console.log(name)}
        {
            name !== 'John' ? <Redirect to="/" /> : null
        }
    </Container>
);

// Second way to write about : by using this.props 

/*
const About = (props) => (
  <div>
    <h3>About is here</h3>
    Name: {props.match.params.name}
    {console.log(props.match.params.name)}
    {
      props.match.params.name !== 'John' ? <Redirect to="/" /> : null
    }
  </div>
)
*/

export default About;
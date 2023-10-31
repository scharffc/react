import '../App.css';
import { Container, Button } from 'react-bootstrap';

function Counter(props) {
  
  return (
    <div className="App">
      Counter 
      <Button size="sm" variant="danger">+</Button>
    </div>
  );
}

export default Counter;
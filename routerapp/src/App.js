import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Counter from './components/Counter.js';
import DefaultContact from './components/DefaultContact.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';

function App() {
  const name = "John";
  const city = "NYC";
  return (
    <Container>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/about/${name}`}>About</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to={`/contact/${name}/${city}`}>Contact</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/:name" component={About} />
          <Route path="/contact" exact component={DefaultContact} />
          <Route path="/contact/:name/:city" component={Contact} />
          <Route path="/counter" component={Counter} />
          <Route render={() => <h3>404: Page not found</h3>} />
        </Switch>
      </Router >
    </Container>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Counter from './components/Counter';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/john">About</Link></li>
        <li><Link to="/counter">Counter</Link></li>
      </ul> 

        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/about/:name" component={About} />
          <Route path="/counter" component={Counter} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

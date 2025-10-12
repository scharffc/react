import logo from './logo.svg';
import './App.css';
import HouseFunction from './components/HouseFunction';
import Room from './components/Room'; // path

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <HouseFunction>
              <Room name="Livingroom">
              </Room>
              <Room name="Kitchen">
              </Room>
            </HouseFunction>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          More on home improvement ...
        </a>
      </header>
    </div>
  );
}

export default App;

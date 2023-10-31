import '../App.css';

function About(props) {
  return (
    <div className="App">
      About for {props.match.params.name}
    </div>
  );
}

export default About;
import './App.css';

function App(props) {
  var counter = 0
  const doClick = () => {
    counter++
  }
  return (
    <div className="App">
      <h1 className={props.color}>{props.title}</h1>
      <p className={props.color, "clickable"} onClick={doClick}>counter: {counter}.</p>
    </div>
  );
}

export default App;

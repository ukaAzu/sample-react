import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1 className={props.color}>{props.title}</h1>
      <p className={props.color}>{props.message}</p>
    </div>
  );
}

export default App;

import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
}

export default App;

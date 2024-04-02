import './App.css';

function App() {
  const msg = "これはサンプルのメッセージです"
  return (
    <div className="App">
      <h1>React sample</h1>
      <p>This is sample application.</p>
      <div>{msg}</div>
    </div>
  );
}

export default App;

import './App.css';
import { useState, useEffect } from 'react';

function App(props) {
  var [flag, setFlag] = useState(true)

  const doClick = (event) => {
    setFlag(!flag)
  }

  return (
    <div className="App">
      <h1>{props.title}</h1>
      <p className={flag ? "classA" : "classB"}>{flag ? "ON" : "OFF"}です</p>
      <button className='button' onClick={doClick}>Click</button>
    </div>
  );
}

export default App;

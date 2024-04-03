import './App.css';
import { useState, useEffect } from 'react';

function App(props) {
  const [input, setInput] = useState(1)
  const [message, setMessage] = useState("数値を入力")
  const doInput = (event) => {
    setInput(event.target.value)
  }

  useEffect(() => {
    var prime = true
    if (input == 1) {
      prime = false
    } else {
      for (var i = 2; i <= input / 2; i++) {
        if (input % i === 0) {
          prime = false
          break
        }
      }
    }
    setMessage(prime ? "素数" : "素数ではない")
  }, [input])

  return (
    <div className="App">
      <h1 className={props.color}>{props.title}</h1>
      <p className={'${props.color} clickable'}>{message}</p>
      <div>
        <input type="number" min="1" onChange={doInput} />
      </div>
    </div>
  );
}

export default App;

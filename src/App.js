import './App.css';
import { useState } from 'react';

function App(props) {
  const [input, setInput] = useState("")
  const [message, setMessage] = useState("お名前は？")
  const doInput = (event) => {
    setInput(event.target.value)
  }
  const doClick = () => {
    setMessage("こんにちは、" + input + "さん！")
  }
  return (
    <div className="App">
      <h1 className={props.color}>{props.title}</h1>
      <p className={'${props.color} clickable'}>{message}</p>
      <div>
        <input type="text" onChange={doInput} />
        <button onClick={doClick}>Click</button>
      </div>
    </div>
  );
}

export default App;

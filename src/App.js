import './App.css';
import { useState, useEffect } from 'react';

function App(props) {
  const data = [
    { name: "Taro", mail: "Taro@example.com" },
    { name: "Hanako", mail: "Hanako@example.com" },
    { name: "Sachiko", mail: "Sachiko@example.com" }
  ]

  return (
    <div className="App">
      <h1>{props.title}</h1>
      <ul>
        {data.map((item, key) => {
          return (<li>{item.name} [{item.mail}]</li>)
        })}
      </ul>
    </div>
  );
}

export default App;

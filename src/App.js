import './App.css';
import { useState, useEffect } from 'react';

function Message(props) {
  return (
    <p className='ClassA'>{props.message}</p>
  )
}

function Data(props) {
  return (
    <ul>
      {props.data.map((item, key) => {
        return (<li key={key}>{item.name}</li>)
      })}
    </ul>
  )
}

function App(props) {
  const data = [
    { name: "Taro" },
    { name: "Hanako" },
    { name: "Sachiko" },
  ]

  return (
    <div className="App">
      <h1 className="ClassB">{props.title}</h1>
      <Message message="This is sample message" />
      <Data data={data} />
    </div>
  );
}

export default App;

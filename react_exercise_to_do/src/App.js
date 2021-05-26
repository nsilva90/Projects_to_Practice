import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ListTodo from './ListTodo'


const title = <h3>TO DO LIST</h3>
function setTitle(title) {
  return <h3>{title} <span id='time'></span></h3>
}

function tick() {
  const element = (
    new Date().toLocaleTimeString()
  );
  ReactDOM.render(element, document.getElementById('time'));
}

setInterval(tick, 1000);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {setTitle('TO DO LIST')}
        <ListTodo />
      </header>
    </div>
  );
}

export default App;

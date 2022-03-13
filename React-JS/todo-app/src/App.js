import  React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
class App123 extends Component {
  render() {
    return (
      <div className="App456">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload CCCDDDD.
            My hello world
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        </header>
        
      </div>
    );
  }
}


class FirstComponent extends Component {
  render() {
    return (
      <div className="FirstComponent"> FirstComponent  Class </div>
    );
  }
}

function SecondComponent() {
  
    return (
      <div className="SecondComponent"> SecondComponent Function </div>
    );
  
}

export default App123;
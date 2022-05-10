import  React, { Component } from 'react';
import { FirstComponent  } from './components/learning-examples/ComponentExamples';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Counter from './components/counter/Counter';
import logo from './logo.svg';
import './App.css';
 
class App123 extends Component {
  render() {
    return (
      <div className="App456">
       {/*<Counter></Counter>*/}
      </div>
    );
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
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
        <ThirdComponent></ThirdComponent>
        </header>
        
      </div>
    );
  }

}

export default App123;
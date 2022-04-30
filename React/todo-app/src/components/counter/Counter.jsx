import React  from 'react' // Component is not needed as its function component
import './Counter.css'
import { Component } from 'react';
import PropTypes from 'prop-types';

// class Counter component
// Moving the State from child to parent  --- calling parent function from child component
class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter : 0,
            secondCounter : 100,
            thirdCounter : 300
        }
        this.increment = this.increment.bind(this); // This is not needed if we use 'arrow' functions
        this.decrement = this.decrement.bind(this); // This is not needed if we use 'arrow' functions
     }

    render () {
        return (             
             <div className="Counter"> 
                 <CounterButton by = {1} incrementMethod = {this.increment} decrementMethod = {this.decrement}></CounterButton>
                 <CounterButton by = {5} incrementMethod = {this.increment} decrementMethod = {this.decrement}></CounterButton>
                 <CounterButton by = {10} incrementMethod = {this.increment} decrementMethod = {this.decrement}></CounterButton>
                 <span className='count'>{this.state.counter}</span>
                 <div><button className='reset' onClick = {this.resetResult}>Reset</button></div>
             </div>
        )
    }

    resetResult = () => {  // using arrow ( => ) function
       this.setState(
                { counter: 0 }
       );
    }

    increment (by)  { // increment function to Update State Counter ++ 
        console.log(`increment from child - ${by}`); 
       // this.state.counter ++; 
        this.setState( 
            (prevState) => {
             return {counter : prevState.counter + by}        
         // secondCounter : this.state.secondCounter + 2
            }
       );
     }

     decrement (by)  { // increment function to Update State Counter ++ 
        console.log(`decrement from child - ${by}`); 
       // this.state.counter ++; 
        this.setState( 
            (prevState) => {
             return {counter : prevState.counter - by}        
         // secondCounter : this.state.secondCounter + 2
            }
       );
     }
}

// class CounterButton component
class CounterButton extends Component  {

     // Define initial state of Component ( Class component / function component ) in the constructor
     // state => counter 0

     constructor() {
        super();
        this.state = {
            counter : 0,
            secondCounter : 100,
            thirdCounter : 300
        }
        // this.increment = this.increment.bind(this); // This is not needed if we use 'arrow' functions
     }

    render () {
        return (
            <div className="CounterButton"> 
                <button onClick={this.increment}>+{this.props.by}</button>
                <button onClick={this.decrement}>-{this.props.by}</button>
                {/*<span className='count'>{this.state.counter}</span> */}
                {/* <span className='count'>{this.state.secondCounter}</span> */}
               {/* <span className='count'>{this.state.thirdCounter}</span> */}
            </div>
    )

}

     increment = () =>  { // increment function to Update State Counter ++ 
       console.log("increment"); 
      // this.state.counter ++; 
       this.setState( {
            counter : this.state.counter + this.props.by ,
            secondCounter : this.state.secondCounter + 2
            }
       );
       this.props.incrementMethod(this.props.by);
    }

    decrement = () =>  { // increment function to Update State Counter ++ 
        console.log("decrement"); 
       // this.state.counter ++; 
        this.setState( {
             counter : this.state.counter - this.props.by ,
             //secondCounter : this.state.secondCounter + 2
             }
        );
        this.props.decrementMethod(this.props.by);
     }
}

// ES6 workaround provided by React to initialize the default value for Props
CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter;
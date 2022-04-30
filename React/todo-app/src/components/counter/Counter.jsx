import React  from 'react' // Component is not needed as its function component
import './Counter.css'
import { Component } from 'react';

// function component
class Counter extends Component  {

     // Define initial state of Component ( Class component / function component ) in the constructor
     // state => counter 0

     constructor() {

        super();

        this.state = {

            counter : 0,
            secondCounter : 100,
            thirdCounter : 300
        }

        this.increment = this.increment.bind(this);
     }

    render() {
    
    return (
         
         <div className="Counter"> 
        
             <button onClick={this.increment}>+1</button>
         
             <span className='count'>{this.state.counter}</span>
             <span className='count'>{this.state.secondCounter}</span>
             <span className='count'>{this.state.thirdCounter}</span>
         
         </div>
    )

}

     increment() { // increment function to Update State Counter ++ 

       console.log("increment"); 

       this.state.counter ++; 

       this.setState( {

            counter : this.state.counter + 1 ,
            secondCounter : this.state.secondCounter + 2

            }

       )
    }

}

export default Counter
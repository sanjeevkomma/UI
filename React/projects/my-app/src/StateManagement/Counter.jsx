import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';


function Counter() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Count changed:', count);
    }, [count]); // Runs every time `count` changes

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default Counter;
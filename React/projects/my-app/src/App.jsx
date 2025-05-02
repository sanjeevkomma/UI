import logo from './logo.svg';
import './App.css';
import Apple from './Apple';
import Sample from './example/Sample';
import './sample.css';

let fruit = 'Apple';
let b = 'Mango';

function App() {
    return (
        <section>
            <div className="App">
                <Apple/>
                <Sample/>
                <h1>This is sample CSS file</h1>
            </div>
            <h1>I like {fruit} and {b}</h1>
            <h1>this is h1 tag</h1>
            <h2>this is h2 tag</h2>
            <h3>this is h3 tag</h3>
        </section>
    );
}

export default App;

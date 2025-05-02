import logo from './logo.svg';
import './App.css';
import Apple from './Apple';
import Sample from './example/Sample';
import './sample.css';

let a = 'Apple';
let b = 'Mango';

function App() {
    return (
        <section>
            <div className="container">
                <Apple/>
                <Sample/>
                <h1>This is sample CSS file</h1>
            </div>
            <p className="para">This is paragraph</p>
            <h1>I like {a} and {b}</h1>
            <h1>this is h1 tag</h1>
            <img src="logo192.png" className="samplePictures" alt="logo" />
        </section>
    );
}

export default App;

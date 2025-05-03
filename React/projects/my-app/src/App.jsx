import logo from './logo.svg';
import './App.css';
import Apple from './Apple';
import Sample from './example/Sample';
import './sample.css';
import FirstComp from "./propsContainer/FirstComp";
import SecondComp from "./propsContainer/SecondComp";
import ThirdComp from "./propsContainer/ThirdComp";
import FourthComp from "./propsContainer/FourthComp";



let a = 'Apple';
let b = 'Mango';

const user = {
    name: 'sanjeev',
    city: 'hyd',
    area: 'miya',
    age: 20
};


function App() {
    return (
        <section>

            <FirstComp myname={user.name}/>
            <SecondComp myname={user.city}/>
            <ThirdComp myname={user.area}/>
            <FourthComp myname={user.age}/>

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

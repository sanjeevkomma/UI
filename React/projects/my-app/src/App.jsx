import logo from './logo.svg';
import './App.css';
import Apple from './Apple';
import Sample from './example/Sample';
import './sample.css';
import FirstComp from "./propsContainer/FirstComp";
import SecondComp from "./propsContainer/SecondComp";
import ThirdComp from "./propsContainer/ThirdComp";
import FourthComp from "./propsContainer/FourthComp";
import Childcomp from "./propsContainer/ChildComp";
import Counter from "./StateManagement/Counter";
import StateMgm from "./StateManagement/StateMgm";
import {useState} from 'react';
import ClickEvent from "./Events/ClickEvent";
import WindowSizeTracker from "./EventListeners/WindowSizeTracker";
import FormEvent from "./Events/FormEvent";
import ArraySample from "./ArraySample";
import TemplateLiteral from "./TemplateLiteral";
import FetchUserPage from "./API/FetchUserPage";
import AddEmployeePage from "./API/AddEmployeePage";
import Circuit from "./ShortCircuit/Circuit";
import Fruits from "./SpreadOperator/Fruits";
import MultiState from "./StateManagement/MultiState";
import FirstPage from "./Routing/FirstPage";
import SecondPage from "./Routing/SecondPage";
import ThirdPage from "./Routing/ThirdPage";
import FourthPage from "./Routing/FourthPage";
import NavigationBar from "./Routing/NavigationBar";

import {BrowserRouter} from "react-router-dom";

import {Routes, Route} from "react-router-dom";


let a = 'Apple';
let b = 'Mango';

const user = {
    name: 'sanjeev',
    city: 'hyd',
    area: 'miya',
    age: 20
};

const exampleCarObject = {
    name: 'BMW',
    year: 2021,
    model: '320i',
    color: 'red'
};

function App() {

    const [sampleCondition, setSampleCondition] = useState(true);

    const result = sampleCondition ? <StateMgm/> : 'I am false statement';

    return (
        <section>
            <BrowserRouter>
                <NavigationBar/>
                <Routes>
                    <Route path="/first" element={<FirstPage/>}/>
                    <Route path="/second" element={<SecondPage/>}/>
                    <Route path="/third" element={<ThirdPage/>}/>
                    <Route path="/fourth" element={<FourthPage/>}/>
                </Routes>
            </BrowserRouter>


            {/* <MultiState/>
             <Fruits/>
             <Circuit/>
             <AddEmployeePage/>

            <FetchUserPage/>
            <TemplateLiteral/>
            <ArraySample/>
            <FormEvent/>


            <ClickEvent/>
            <WindowSizeTracker/>
            <h1>{result}</h1>
            <FirstComp myname={user.name}/>
            <SecondComp myname={user.city}/>
            <ThirdComp myname={user.area}/>
            <FourthComp myname={user.age}/>
            <Childcomp car={exampleCarObject}/>

            <div className="container">
                <Apple/>
                <Sample/>
                <h1>This is sample CSS file</h1>
            </div>
            <p className="para">This is paragraph</p>
            <h1>I like {a} and {b}</h1>
            <h1>this is h1 tag</h1>
            <img src="logo192.png" className="samplePictures" alt="logo" />

            */}

        </section>
    );
}

export default App;

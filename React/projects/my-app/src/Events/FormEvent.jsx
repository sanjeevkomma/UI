import React, {useState} from 'react';

const FormEvent = () => {

    const [userName, setUserName] = useState("");
    const getUserName = (event) => {
        setUserName(event.target.value);
    }

    const [newUserDetails, setNewUserDetails] = useState();

    const userDetails = () => {
           setNewUserDetails(userName);
    }

    return (
        <section className="formSection">
            <h2> onChange {userName}</h2>
             <h2> onClick {newUserDetails}</h2>
            <div className="inputDiv">
                <input type="text" placeholder="Enter your name"
                       onChange={getUserName}/>

                <br/>
                <button className="Submitbt" onClick={userDetails}>Submit</button>
            </div>
        </section>
    );
}

export default FormEvent;
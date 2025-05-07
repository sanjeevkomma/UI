import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';

const FormEvent = () => {

    const [userName, setUserName] = useState("");
    const getUserName = (event) => {
        setUserName(event.target.value);
    }

    const [newUserDetails, setNewUserDetails] = useState();

    const userDetails = (e) => {
        e.preventDefault(); // Prevent default form submit. Avoids Page/Form Refresh
        setNewUserDetails(userName);
        notify();

    }

    const notify = () => toast("Wow so easy!");

    return (
        <section className="formSection">
            <h2> onChange {userName}</h2>
            <h2> onClick {newUserDetails}</h2>
            <div className="inputDiv">
                <form onSubmit={userDetails}>
                    <input type="text" placeholder="Enter your name"
                           onChange={getUserName}/>
                    <br/>
                    <button className="Submitbt" type="submit">Submit</button>
                </form>
            </div>
            <ToastContainer />
        </section>
    );
}

export default FormEvent;
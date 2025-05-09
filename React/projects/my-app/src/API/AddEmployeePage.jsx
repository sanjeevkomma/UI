import React, {useState} from 'react';

const AddEmployeePage = () => {

    const [name,setName] = useState("");
    const [role,setRole] = useState("");
    const [email,setEmail] = useState("");
    const [department,setDepartment] = useState("");

    const add_emp_uri = "http://localhost:3000/employee/add";

    // console.log(name ,role, email, department);

    const empDetails = [name, role,email,department];

    const empHandler = async (e) => {
        e.preventDefault();
        // console.log(empDetails);
        try {
            const response = await fetch(add_emp_uri, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(empDetails)
            });
            alert("employee added successfully");
        }
        catch (error) {
            console.log(error);
            alert("Error in adding employee" + error);
        }
    }

    return (
        <div className="empForm">
            <div className="section">
                <form onSubmit={empHandler}>
                    <label>Employee Name</label>
                    <input type="text" name = "name" onChange = {(e) => setName(e.target.value)} /><br/>
                    <label>Employee Role</label>
                    <input type="text" name = "role" onChange = {(e) => setRole(e.target.value)} /><br/>
                    <label>Employee Email</label>
                    <input type="email" name = "email" onChange = {(e) => setEmail(e.target.value)} /><br/>
                    <label>Employee Department</label>
                    <input type="text" name = "department" onChange = {(e) => setDepartment(e.target.value)} /><br/>
                    <button type = 'submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddEmployeePage;
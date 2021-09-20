import React, { useState } from 'react';
import axios from "axios";

const Register = ({ createNewTeacher, newError}) => {
    const [teacher, setTeacher] = useState({});
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("")

    const createTeacher = teacher => {
        console.log(teacher)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        createTeacher(teacher)
    };

    const registerTeacher = async () => {
        await axios.post('http://localhost:5000/api/users', {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
        })
        .then((res) => {
            console.log(res)
            setTeacher(res);
        })
        .catch(error => console.log(error));

    }

    return(
        <div>
            <h1>Register</h1>
                <form onSubmit={submitHandler}>
                    <div>
                        <input type="email" name="Email" placeholder="Email.." onChange ={e=> setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <input type="firstName" name="First Name" placeholder="First Name" onChange ={e=> setFirstName(e.target.value)}/>
                    </div>
                    <div>
                        <input type="lastName" name="Last Name" placeholder="Last Name" onChange ={e=> setLastName(e.target.value)}/>
                    </div>
                    <div>
                        <input type="password" name="Password" placeholder="Password.." onChange ={e=> setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button onClick={()=>{registerTeacher()}}>Create Account</button>
                    </div>
                </form>
        </div>
    );
};

export default Register;
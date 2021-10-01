import React, { useEffect, useState } from 'react';
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Link } from 'react-router-dom';

const NewStudent = ({user}) => {
    const [teacher, setTeacher] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [allergies, setAllergies] = useState("");
    const [glasses, setGlasses] = useState(false);
    const [stock, setStock] = useState("");


    const submitHandler = (e) =>{
        e.preventDefault();
    };

    const addStudent = async () => {
        const jwt = localStorage.getItem('token');
        const teacherId = jwtDecode(jwt);
        console.log(teacher);
        let endpoint = `http://localhost:5000/api/users/${teacherId._id}/children`
        console.log(endpoint);
        await axios.post(endpoint,{
            firstName: firstName,
            lastName: lastName,
            allergies: allergies,
            glasses: glasses,
            stock: stock
        })
        .then((res)=> {
            console.log(res.data)
            setTeacher(res);
        })
        .catch(error => console.log(error))
        window.location = '/classroom'
    }


    return(
        <div className= "newStudent">
            <div>
                <Link to="/classroom">Back to Classroom</Link>
            </div>
        <div>
            <div>
                <p>
                    Adding a child
                </p>
            </div>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="firstName" name="First Name" placeholder="First Name.." onChange={e=> setFirstName(e.target.value)}/>
                </div>
                <div>
                    <input type="lastName" name="Last Name" placeholder="Last Name.." onChange={e=> setLastName(e.target.value)}/>
                </div>
                <div>
                    <input type="allergies" name="Allergies" placeholder="Allergies??" onChange={e=> setAllergies(e.target.value)}/>
                </div>
                <div>
                    <input type="glasses" name="Glasses" placeholder="True or False" onChange={e=> setGlasses(e.target.value)}/>
                </div>
                <div>
                    <input type="Stock" name="Stock" placeholder="Stock.." onChange={e=> setStock(e.target.value)}/>
                </div>
                <div>
                    <button onClick={()=>{addStudent()}}>Add New Child</button>
                </div>
            </form>
        </div>
        </div>
    )


}

export default NewStudent
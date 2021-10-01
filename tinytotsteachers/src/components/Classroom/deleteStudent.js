import React, { useEffect, useState } from 'react';
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Link } from 'react-router-dom';

const DeleteStudent = ({user}) => {
    const [teacher, setTeacher] = useState("")
    const [childId, setChildId] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")


    const submitHandler = (e) =>{
        e.preventDefault();
    };

    const deleteStudent = async () => {
        let endpoint = `http://localhost:5000/api/users/${user._id}/children/${user.children._id}`;
        await axios.delete(endpoint, {
        })
        .then((res) => {
            console.log(res)
        })
        .catch((error) => console.log( error.response.request._response ) );
    }


    return(
        <div className="removeStudent">
            <div>
            {
                console.log("Teacher in render on Delete Student:", user)
            }
            </div>
            <div>
                <Link to="/classroom">Back to Classroom</Link>
            </div>
        <div>Delete Student</div>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="childID" name="ChildID" placeholder="Childs Id" onChange ={e=> setChildId(e.target.value)}/>
                </div>                     
                <div>
                    <input type="firstName" name="FirstName" placeholder="First Name" onChange ={e=> setFirstName(e.target.value)}/>
                </div>
                <div>
                    <input type="lastName" name="LastName" placeholder="Last Name" onChange ={e=> setLastName(e.target.value)}/>
                </div>                    
                <div>
                    <button onClick={()=>{deleteStudent()}}>Delete</button>
                </div>
            </form>
        </div>
    )

}

export default DeleteStudent
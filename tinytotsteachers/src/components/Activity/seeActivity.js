import React, { useEffect, useState } from 'react';
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Link } from 'react-router-dom';

const SeeActivities = ({user}) => {
    const [teacher, setTeacher] = useState();

    useEffect(()=> {
        console.log("Component Initial Render");
        currentActivities(true);
        console.log("Activities Fetched!")
      },[])

    const currentActivities= async () => {
        const jwt = localStorage.getItem('token');
        const teacherId = jwtDecode(jwt);
        console.log(teacher);
        let endpoint = `http://localhost:5000/api/users/${teacherId._id}/activities`;
        console.log(endpoint);
        await axios.get(endpoint, {
        })
        .then((res) => {
            console.log(res)
            setTeacher(res);
        })
        .catch(error => console.log(error));
    }
    if(user){
    return(
        <div>
            <div>
            {
                console.log("Teacher On See Activity page:", user)
            }
                <div>
                    <Link to="/activity">Activity Page</Link>
                </div>
                <div>
                    <ul>
                        {user.activities.map((user)=>(
                            <li key={user._id}>
                                <span>
                                    <div>
                                  Event ID: {user._id}
                                    </div>
                                  Event Name: {user.eventName}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        )
    }else{
        return(
        <h1>Wrong screen of Rendering</h1>
        )
    }
    }

export default SeeActivities;
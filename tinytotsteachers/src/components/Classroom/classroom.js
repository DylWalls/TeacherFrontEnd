import React, { useState } from 'react';
import axios from 'axios';
import './classroom.css';
import { Link } from 'react-router-dom';

const ClassRoom = ({user}) => {
    const [students, setStudents] = useState([]);


    const currentRoom= async () => {
        console.log(user);
        let endpoint = `http://localhost:5000/api/users/${user.teacher._id}/children`;
        console.log(endpoint);
        await axios.get(endpoint, {
        })
        .then((res) => {
            console.log(res)
            setStudents(res);
        })
        .catch(error => console.log(error));
    }

    return(
        <div>
            <div>
                <Link to="home">Go Home</Link>
            </div>
            <div className="teacher">
                Current Teachers Name
            </div>
            <div className="children">
                <li>
                    Child1
                </li>
                <li>
                    Child2
                </li>
                <li>
                    Child3
                </li>
                <li>
                    Child4
                </li>
                <li>
                    Child5
                </li>
                <li>
                    Child6
                </li>
                  
                
            </div>
        </div>
    )

}

export default ClassRoom;
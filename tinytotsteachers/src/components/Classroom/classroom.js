import React, { useState } from 'react';
import axios from 'axios';
import './classroom.css';
import { Link } from 'react-router-dom';

const ClassRoom = ({user}) => {
    const [students, setStudents] = useState([]);
    

    const currentRoom= async () => {
        console.log(user);
        let endpoint = `http://localhost:5000/api/users/${user._id}/children`;
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
                <Link to="/home">Go Home</Link>
            </div>
            <div className="teacher">
                Current Teachers Name:
                <p>{user.firstName} {user.lastName}</p>
            </div>
            <div className="children">
            <ul>
                        {user.children.map((user)=>(
                            <li key={user._id}>
                                <span>
                                    <div>
                                  Name: {user.firstName} {user.lastName}
                                    </div>
                                    <li>
                                  Allergies: {user.allergies}
                                  </li>
                                  <li>
                                  Items in Stock: {user.stock}
                                  </li>
                                </span>
                            </li>
                        ))}
                    </ul>
            </div>
                  <div className="addstudent">
                      <Link to="/addStudent">Add a student</Link>
                  </div>
                  <div className="deletes">
                      <Link to="/deleteStudent">Delete a student</Link>
                  </div>
        </div>
    )

}

export default ClassRoom;
import React, { useState } from 'react';
import axios from 'axios';
import './home.css';

const Home = ({user}) => {
    const [teacher, setTeacher] = useState("");
    const [students, setStudents] = useState([]);


    const handleChange = (event) => {
        setTeacher(event.target.value);
    }
    const currentStudents= async () => {
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
        <div className="*, schedule">
            Weekly Schedule
            <p>Monday: 6am - 5pm</p>
            <p>Tuesday:6am - 5pm</p>
            <p>Wednesday:off</p>
            <p>Thursday:6am - 5pm</p>
            <p>Friday:6am - 5pm</p>
        </div>
        <div className= "students">
            Current students
            <button onClick={()=>{currentStudents()}}>See Students</button>
        </div>
    </div>
         
    )
}

export default Home;
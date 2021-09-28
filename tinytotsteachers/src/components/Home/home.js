import React, { useState } from 'react';
import axios from 'axios';
import './home.css';
import { Link } from 'react-router-dom';

const Home = ({user}) => {
    const [teacher, setTeacher] = useState("");
    const [students, setStudents] = useState([]);


    const CreateActivity = async () =>{
        let endpoint = `http://localhost:5000/api/users/${user.teacher._id}/activities`
        await axios.post(endpoint,{

        })
        .then((res) => {
            console.log(res)
        })
        .catch(error => console.log(error));
    }
    const LogOut = () => {
        localStorage.removeItem("token")
        console.log(`${user.teacher._id} has been logged out!`)
        window.location = '/login'
    }
    
    return(
    <div>
        <div className="schedule">
            Weekly Schedule
            <p>Monday: 6am - 5pm</p>
            <p>Tuesday:6am - 5pm</p>
            <p>Wednesday:off</p>
            <p>Thursday:6am - 5pm</p>
            <p>Friday:6am - 5pm</p>
        </div>
        <div className= "students">
        <Link to='/classroom'>Current students</Link>
        </div>
        <div className="activities">
            <Link to='/activity'><p>Activity Page!</p></Link>
        </div>
        <div className="logout">
            <button onClick={()=>{LogOut()}}>Log out</button>
        </div>

    </div>
         
    )
}

export default Home;
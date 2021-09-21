import React, { useState } from 'react';
import './home.css';

const Home = ({createTeacher, deleteTeacher}) => {
    const [teacher, setTeacher] = useState("");

    const handleChange = (event) => {
        setTeacher(event.target.value);
    }

    return(
        <div>
            <h1>This is the Home page! WE MADE IT!</h1>
        </div>
    )
}

export default Home;
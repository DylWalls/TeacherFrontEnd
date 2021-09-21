import React, {useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const Login = ({createTeacher, deleteTeacher}) => {
    const [teacher, setTeacher] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    


    const submitHandler = (e) =>{
        e.preventDefault();
    };

    const loginTeacher = async ()=>{
        await axios.post('http://localhost:5000/api/authUser',{
            email: email,
            password: password,
        })
        .then((res)=> {
            console.log(res.data)
            localStorage.setItem("token", res.data)
            console.log(`Success ${localStorage.getItem("token")}`)
        })
        .catch(error => console.log(error))
        console.log(teacher)
    }


    return(
        <>
        <div>
            <h2>Sign In</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="email" name="Email" placeholder="Email.." onChange={e=> setEmail(e.target.value)}/>
                </div>
                <div>
                    <input type="password" name="Password" placeholder="Password.." onChange={e=> setPassword(e.target.value)}/>
                </div>
                <div>
                    <button onClick={()=>{loginTeacher()}}>Sign In</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default Login;
import React, { useState, useEffect } from 'react';
import jwtDecode from "jwt-decode";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
  Link,
} from "react-router-dom";
import './App.css';

//Components
import Register from './Register/teacherRegister';
import Login from './Login/login';
import SeeActivities from './Activity/seeActivity';
import Activity from './Activity/activity';
import ClassRoom from './Classroom/classroom';
import NewStudent from './Classroom/addStudent';
import DeleteStudent from './Classroom/deleteStudent';
import Home from './Home/home';
import axios from 'axios';

const App = () => {
  const [teacher, setTeacher] = useState(null);

  useEffect(()=> {
    const jwt = localStorage.getItem('token');

    try{
      const teacherId = jwtDecode(jwt);
      console.log(teacherId);
      //axios get to send userid and get back whole user object
      //response.data will be the whole user object
      //save that as 'teacher' so the setTeacher hook down below works again
      axios.get(`http://localhost:5000/api/users/${teacherId._id}`)
      .then((res) => {
        console.log(res.data);
      let teacher = (res.data)
      setTeacher(teacher)
    })} catch{}

  },[])

  if(!teacher){
    return(
      <React.Fragment>
      <Router>
       <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register}/>
          </Switch>
        </BrowserRouter>
      </Router>
    </React.Fragment>
    )
  }else{
  return (
<div>
    <div className="header" user={teacher}>
      Welcome {teacher.firstName} {teacher.lastName} to TinyTots App!
    </div>
    {
      console.log("teacher in render:", teacher)
    }

    <Router>
       <BrowserRouter>
        <Switch>
          <Route exact path="/deleteStudent" render={props => <DeleteStudent {...props} user={teacher}/>}/>
          <Route path="/addStudent" render={props => <NewStudent {...props} user={teacher}/>}/>
          <Route path="/seeActivities" render={props => <SeeActivities {...props} user={teacher}/>}/>
          <Route path="/classroom" render={props => <ClassRoom {...props} user={teacher}/>}/>
          <Route path="/activity" render={props => <Activity {...props} user={teacher}/>}/>
          <Route path="/home" render={props => <Home {...props} user={teacher}/>}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login} />
          <Route path="/register" render={props => {
            if(!teacher){
              return <Redirect to="/login"/>
            }else{
              return <Redirect to="/home"/>
            }
          }}/>
          <Route path="/" render={props => {
            if(!teacher){
              return <Redirect to="/login"/>
            }else{
              return <Redirect to="/home"/>
            }
          }}/>
        </Switch>
        </BrowserRouter>
    </Router>
        
</div>
  )
}
}
export default App;

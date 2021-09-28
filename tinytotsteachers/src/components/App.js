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
import Activity from './Activity/activity';
import ClassRoom from './Classroom/classroom';
import Home from './Home/home';

const App = () => {
  const [teacher, setTeacher] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false)

  useEffect(()=> {
    const jwt = localStorage.getItem('token');

    try{
      const teacher = jwtDecode(jwt);
      setTeacher({teacher})
    }catch{}

  },[])

  return (
<div>
    <div className="header" user={teacher}>
      Welcome to TinyTots App!
    </div>

    <Router>
       <BrowserRouter>
        <Switch>
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

export default App;

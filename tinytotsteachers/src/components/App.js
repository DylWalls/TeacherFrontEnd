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
import NavBar from './NavBar/NavBar';
import Home from './Home/home';

const App = () => {
  const [teacher, setTeacher] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
          <Redirect to="/not-found"/>
        </Switch>

        </BrowserRouter>
    </Router>
</div>
  )
}

export default App;

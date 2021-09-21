import React, { useState, useEffect } from 'react';
import jwtDecode from "jwt-decode";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Register from './Register/teacherRegister';
import Login from './Login/login';
import NavBar from './NavBar/NavBar';
import Home from './Home/home';
import './App.css';

const App = () => {
  const [teacher, setTeacher] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=> {
    const jwt = localStorage.getItem('token');

    try{
      const teacher = jwtDecode(jwt);
      setTeacher({teacher})
    }catch{}

  },[])

  const handleLogOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
}

  return (
    <Router>
      <div className="bgi">
        <div className='header'>
          <h1>Register or Log In</h1>
        </div>
        <NavBar/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/login" render={() => (
              <Login
                isLoggedIn={isLoggedIn}
                handleLogOut={handleLogOut}
              />)}/>
            <Redirect to="/not-found"/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;

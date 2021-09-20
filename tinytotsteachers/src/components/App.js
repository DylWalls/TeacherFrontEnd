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
      <div>
        <div>
          <h1>Register or Log In</h1>
        </div>
        <Switch>
            <Route path="/" exact component={Register}/>
            <Route path="/login" render={() => (
              <Login
                isLoggedIn={isLoggedIn}
                handleLogOut={handleLogOut}
              />
            )}
            />
        </Switch>
      </div>
    </Router>
  )
}

export default App;

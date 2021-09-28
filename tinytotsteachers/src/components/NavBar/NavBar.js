import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar(props){
    return(
        <nav>
            <div class='topnav'>
                <ol>
                {/* {!props.teacher &&
                <React.Fragment>
                  <Link to="/register">
                    <h3> Register</h3>
                  </Link>
                  <Link to="/Login">
                    <ul>
                      <h3> Log In</h3>
                    </ul>
                  </Link>
                </React.Fragment>
              } */}
               {props.teacher &&
                <React.Fragment>                  
                    <Link to="/Logout">
                    <ul>
                      <h3> Log out</h3>
                    </ul>
                  </Link>
                </React.Fragment>
              }
                </ol>
            </div>
        </nav>
    )
}

export default NavBar;
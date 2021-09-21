import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar(){
    return(
        <nav>
            <div class='topnav'>
                <ul>
                    <Link to="/">
                        <li>
                            Register
                        </li>
                    </Link>
                    <Link to="/login">
                        <li>
                            Sign In
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
import './Nav.css';
import { NavLink } from 'react-router-dom';

const userLinks = (
    <div>
        <NavLink className="link" to ="/">Create a Post</NavLink>
        <NavLink className="link" to ="/">Sign Out</NavLink>
    </div>
)

const newUserLinks = (
    <div>
        <NavLink className="link" to ="/">Sign Up</NavLink>
        <NavLink className="link" to ="/">Sign In</NavLink>
        
    </div>
)

const allLinks = (
    <div>
        <NavLink className="link" to ="/">View Listings</NavLink>
    </div>
)

const Navbar = ({user}) => {
    return (
        <nav>
            <div className="nav-container">
                <NavLink className="logo" to="/">CouchWorking</NavLink>
                <div className="nav-links">
                    {user && <div className="user-link">Hello {user.username}</div>}
                    {allLinks}
                    {user ? userLinks : newUserLinks}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
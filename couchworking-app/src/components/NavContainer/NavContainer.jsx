import {Navbar, Nav, Container} from "react-bootstrap"
import "./NavBar.css"
import UserSignIn from "../UserSignIn/UserSignIn"
import SignOut from "../SIgnOut/SignOut"

// const userLinks = (
//     <div>
//         <Nav.Link className="link" to ="/create">Create a Post</Nav.Link>
//         <Nav.Link className="link" to ="/">Sign Out</Nav.Link>
//     </div>
// )

const newUserLinks = (
  <div className="nav-links mr-auto" style={{display: "flex"}}>
    <Nav.Link className="link" href="/sign-up">Sign Up</Nav.Link>
    <Nav.Link className="link" href="/couches">View Listings</Nav.Link>
    {/* <Nav.Link className="link" href="/sign-in">
      Sign In
    </Nav.Link> */}
    <UserSignIn />
    <SignOut />
  </div>
)

const NavContainer = ({user}) => {
  return (
    <Navbar collapseOnSelect bg="light" expand="md" sticky="top" fixed="top">
      <Navbar.Brand href="/">
        <img src="https://image.emojisky.com/503/377503-middle.png" width="40" height="40" alt="couchworking logo" /> CouchWorking
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* {user && <div className="user-link">Hello {user.username}</div>} */}
          {newUserLinks}
          {/* {user ? userLinks : newUserLinks}      */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavContainer

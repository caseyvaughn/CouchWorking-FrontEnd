import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./NavBar.css"
import UserSignIn from "../UserSignIn/UserSignIn"
import SignOut from "../SIgnOut/SignOut"

const newUserLinks = (
  <div className="nav-links mr-auto" style={{display: "flex"}}>
    <UserSignIn />
    <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
    <Nav.Link as={Link} to="/couches">View Listings</Nav.Link>
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
          {newUserLinks}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavContainer

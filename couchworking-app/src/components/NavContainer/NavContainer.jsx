import {Navbar, Nav, Container} from 'react-bootstrap';

// const userLinks = (
//     <div>
//         <Nav.Link className="link" to ="/create">Create a Post</Nav.Link>
//         <Nav.Link className="link" to ="/">Sign Out</Nav.Link>
//     </div>
// )

const newUserLinks = (
    <div>
        <Nav.Link className="link" href="/sign-up">Sign Up</Nav.Link>
        <Nav.Link className="link" href="/sign-in">Sign In</Nav.Link> 
        <Nav.Link className="link" href="/couches">View Listings</Nav.Link>  
    </div>
)

const NavContainer = ({user}) => {
    return (
       <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">CouchWorking</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {/* {user && <div className="user-link">Hello {user.username}</div>} */}
                    {newUserLinks}
                    {/* {user ? userLinks : newUserLinks}      */}
                </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavContainer


// const Navbar = ({user}) => {
//     return (
// <nav>
// <div className="nav-container">
//     <Nav.Link className="logo" to="/">CouchWorking</Nav.Link>
//     <div className="nav-links">
//         {user && <div className="user-link">Hello {user.username}</div>}
//         {allLinks}
//         {user ? userLinks : newUserLinks}
//     </div>
// </div>
// </nav>
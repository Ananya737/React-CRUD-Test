import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const Topnav=()=>{
    return(
        <>
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/faculty">Faculty</Nav.Link>
            <Nav.Link as={Link} to="/ourCourses">Our Courses</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
        </>
    )
}
export default Topnav;
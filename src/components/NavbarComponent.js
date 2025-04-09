import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShip } from 'react-icons/fa';

function NavbarComponent() {
  return (
    <Navbar expand="md" bg="dark" variant="dark" sticky="top" className="py-3"> 
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <FaShip size={24} className="text-info" /> 
          <span className="fw-bold fs-5">Boat Booking</span> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            <Nav.Link as={Link} to="/booking">Book now</Nav.Link>
            <Nav.Link as={Link} to="/prediction">Prediction</Nav.Link>
            <Nav.Link as={Link} to="/my-bookings">View your booking</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

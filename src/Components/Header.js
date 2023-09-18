import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoImage from '../Assets/eye.png';
import '../index.css'; 

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          <img src={logoImage} alt="Logo" className="logo small" />
          Wire-Eye
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="ml-auto"> {/* Use ml-auto to move items to the right */}
            <Nav.Link eventKey={1} href="#" className='mx-3'>
              Home
            </Nav.Link>
            <Nav.Link eventKey={2} href="#" className='mx-3'>
              Problems
            </Nav.Link>
            <Nav.Link eventKey={3} href="#" className='mx-0'>
              Status
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme ="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Wire-Eye</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#" className='mx-3'>
              Home
            </Nav.Link>
            <Nav.Link href="#pricing" className='mx-3'>Problems</Nav.Link>
            <Nav.Link href="#pricing" className='mx-3'>Status</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
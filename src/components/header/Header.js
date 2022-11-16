import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';


export default function Header() {
  return (
    <header>
      <Navbar bg="dark" expand="lg" className="header">
        <Container>
          <Navbar.Brand href="#home" className="homey">
            Slyaka{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto contabar nav-items">
              <Nav.Link href="#home" className="nav-item">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="nav-item">
                About Us
              </Nav.Link>
              <Nav.Link href="#link" className="nav-item">
                Services
              </Nav.Link>
              <Nav.Link href="#link2" className="nav-item">
                Pricing
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     
    </header>
  );
}

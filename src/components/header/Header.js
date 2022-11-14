import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css";
export default function Header() {
  return (
    <header>
       <Navbar bg="dark" expand="lg" className="header">
        <Container className="contabar">
          <Navbar.Brand href="#home">Salyaka</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="#link">Services</Nav.Link>
              <Nav.Link href="#link">Pricing</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>   
    </header>
  );
}

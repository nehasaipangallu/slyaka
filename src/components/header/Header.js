import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Route, NavLink, HashRouter } from 'react-router-dom';

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
              <Nav.Link className="nav-item">
                <NavLink to="/home"></NavLink>
                Home
              </Nav.Link>

              <Nav.Link className="nav-item">
                <NavLink to="/about"></NavLink>
                About Us
              </Nav.Link>
              <Nav.Link className="nav-item">
                <NavLink to="/services"></NavLink>
                Services
              </Nav.Link>
              <Nav.Link className="nav-item">
                <NavLink to="/pricing"></NavLink>
                Pricing
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

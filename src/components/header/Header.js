import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Carousel from 'react-bootstrap/Carousel';

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

      <Carousel className="slide">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src=""
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>About Slyaka</h3>
            <p>We will Develop your dream.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="business.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="work.png" alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  );
}

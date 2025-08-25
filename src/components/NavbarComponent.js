import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

function NavbarComponent() {
  return (
    <Navbar expand="lg" fixed="top" bg="light" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home">InBio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            {sections.map((sec) => (
              <Link
                key={sec.id}
                activeClass="active"
                to={sec.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                {sec.label}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
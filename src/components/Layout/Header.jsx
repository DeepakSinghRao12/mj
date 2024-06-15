import React from 'react';
import { Link } from 'react-router-dom';
import {Container, NavDropdown , Nav, Navbar} from 'react-bootstrap';

const Header = () => {
  return (
   
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand as={Link} to="/">TITLE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link ><Nav.Link></Nav.Link></Link>
          
          <Nav.Link as={Link} to="/aboutus">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/product">Product</Nav.Link>
          <Nav.Link as={Link} to="/Cart">Cart</Nav.Link>
          <Nav.Link as={Link} to="/LearnHooks">LearnHooks</Nav.Link>
          <Nav.Link as={Link} to="/add">Form</Nav.Link>
          <Nav.Link as={Link} to="/list">List</Nav.Link>
          
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
            
            
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
  );
}

export default Header;

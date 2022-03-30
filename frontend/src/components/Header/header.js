import React from 'react'
import { Button, Container, Form, FormControl, Nav ,Navbar, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';

const header = () => {
  const history = useHistory();
  
  return (
    <Navbar bg="primary" expand="lg" variant= 'dark'>
        <Container>
    <Navbar.Brand><Link to = '/'>React-Bootstrap</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/mynotes">
        <Link to= '/mynotes'>My Notes</Link>
        </Nav.Link>
        <NavDropdown title="Ishaan Gautam" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => {
            localStorage.removeItem("userInfo");
            history.push('/')
          }}>Log Out</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline className="d-flex">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2" 
          aria-label="Search"
        />
        <Button variant="outline-dark">Search</Button>
        </Form>
    </Navbar.Collapse>
    </Container>
</Navbar>
  );
}

export default header
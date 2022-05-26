import React from 'react'
import {Nav,Navbar,NavDropdown,Container} from 'react-bootstrap'


function NavBar() {
  return (

    <div className='navbar'>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">TechBook</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">AboutUs</Nav.Link>
      <Nav.Link href="/service">Career</Nav.Link>
      <NavDropdown title="Service" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/testing">Testing</NavDropdown.Item>
        <NavDropdown.Divider />
              </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link to="/branch">Branch</Nav.Link>
      <Nav.Link eventKey={2} to="/login">
      Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavBar
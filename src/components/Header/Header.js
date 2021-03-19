import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand
          href="#home"
          style={{ fontSize: "25px", marginLeft: "5%" }}
        >
          Rider Express
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Destination</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
            <NavDropdown title="UserName" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

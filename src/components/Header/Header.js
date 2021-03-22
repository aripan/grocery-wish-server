import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { SignOut } from "../../FirebaseSetup/firebase";
import { useRiderContext } from "../RiderContextProvider/RiderContextProvider";

const Header = () => {
  const { loggedInUser, setLoggedInUser } = useRiderContext();

  const handleLogout = () => {
    SignOut().then((res) => setLoggedInUser(res));
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/home">
            <Navbar.Brand>Rider Express</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ridingDestination">
                <Nav.Link>destination</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/blog">
                <Nav.Link>blog</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>login</Nav.Link>
              </LinkContainer>
              {loggedInUser.isSignedIn ? (
                <NavDropdown
                  title={loggedInUser.name}
                  id="collasible-nav-dropdown"
                >
                  <LinkContainer to="/login">
                    <NavDropdown.Item onClick={handleLogout}>
                      Log Out
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

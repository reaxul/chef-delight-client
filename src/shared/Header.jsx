import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container, Button } from "react-bootstrap";
import ActiveRoute from "../components/ActiveRoute";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then()
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Chef's Delight</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link>
              <ActiveRoute>Home</ActiveRoute>
            </Nav.Link>
            <Nav.Link>
              <ActiveRoute to={"/blog"}>Blog</ActiveRoute>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user ? (
                <Link to={"/login"}>
                  <Button onClick={handleLogout} variant="warning">
                    Logout
                  </Button>
                </Link>
              ) : (
                <Link to={"/login"}>
                  <Button variant="warning">Login</Button>
                </Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from "react";
import {Navbar, Brand, Link, Nav} from "react-bootstrap";
import Logo from "./Logo";
function Navigation() {
    return <Navbar className="navBar">
    <Navbar.Brand href="#home"><Logo /> </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link className="navLink" href="#menu">Menu</Nav.Link>
      <Nav.Link className="navLink" href="#cart">Cart</Nav.Link>
      <Nav.Link className="navLink" href="#login">Log In</Nav.Link>
    </Navbar.Collapse>
  </Navbar>
}
export default Navigation;
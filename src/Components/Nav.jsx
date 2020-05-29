import React from "react";
import {Navbar, Brand, Link, Nav} from "react-bootstrap";
import {FiShoppingCart} from 'react-icons/fi';
import {BsFillPersonFill} from 'react-icons/bs';
import {MdRestaurantMenu} from 'react-icons/md';
import Logo from "./Logo";
function Navigation() {
    return <Navbar className="navBar">
    <Navbar.Brand href="#home"><Logo /> </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link className="navLink" href="#menu"><MdRestaurantMenu/></Nav.Link>
<Nav.Link className="navLink" href="#cart"><FiShoppingCart/></Nav.Link>
      <Nav.Link className="navLink" href="#login"><BsFillPersonFill/></Nav.Link>
    </Navbar.Collapse>
  </Navbar>
}
export default Navigation;
import React from "react";
import {Navbar, Nav, Col, Row} from "react-bootstrap";
import {FiShoppingCart} from 'react-icons/fi';
import {BsFillPersonFill} from 'react-icons/bs';
import {MdRestaurantMenu} from 'react-icons/md';
import ReactToolTip from "react-tooltip";
import Logo from "../Navbar/Logo";
function Navigation() {
    return <Row>
        <Col xs={5}>
        <Navbar className="navBar">
    <Navbar.Brand href="#home"><Logo /> </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link className="navLink" href="#menu"  data-tip="Menu"><MdRestaurantMenu/><ReactToolTip/></Nav.Link>
<Nav.Link className="navLink" href="#cart" data-tip="Cart"><FiShoppingCart/><ReactToolTip/></Nav.Link>
      <Nav.Link className="navLink" href="#login" data-tip="Log In"><BsFillPersonFill/><ReactToolTip/></Nav.Link>
    </Navbar.Collapse>
  </Navbar>
  </Col>
  </Row>
}
export default Navigation;
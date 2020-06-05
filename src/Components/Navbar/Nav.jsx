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
    <Navbar.Brand href="/"><Logo /> </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link className="navLink" href="/menu"  data-tip="Menu" to="/menu" ><MdRestaurantMenu/><ReactToolTip/></Nav.Link>
<Nav.Link className="navLink" href="/menu" data-tip="Cart" to="/menu"><FiShoppingCart/><ReactToolTip/></Nav.Link>
      <Nav.Link className="navLink" href="/register" data-tip="Log In" to="/register"><BsFillPersonFill/><ReactToolTip/></Nav.Link>
    </Navbar.Collapse>
  </Navbar>
  </Col>
  </Row>
}
export default Navigation;
import React from "react";
import {Navbar, Nav, Col, Row} from "react-bootstrap";
import {FaPizzaSlice} from 'react-icons/fa';
import {FaLeaf} from 'react-icons/fa';
import {FaCookieBite} from 'react-icons/fa';
import {MdLocalDrink} from 'react-icons/md';
import {GiBerriesBowl} from 'react-icons/gi';
import {GiChickenLeg} from 'react-icons/gi';
import ReactToolTip from "react-tooltip";

function MiniNav() {
    return <Row>
        <Col xs={12}>
        <Navbar className="miniNavBar">
    <Navbar.Toggle />
    <Navbar.Collapse className="text-center">
    <Nav.Link className="navLink nav-link" href="/pizza"  data-tip="Pizza" to="/pizza" ><FaPizzaSlice/><ReactToolTip/></Nav.Link>
    <Nav.Link className="navLink nav-link" href="/pasta" data-tip="Pasta" to="/pasta"><GiBerriesBowl/><ReactToolTip/></Nav.Link>
    <Nav.Link className="navLink nav-link" href="/salad" data-tip="Salad" to="/salad"><FaLeaf/><ReactToolTip/></Nav.Link>
    <Nav.Link className="navLink nav-link" href="/side" data-tip="Side" to="/side"><GiChickenLeg/><ReactToolTip/></Nav.Link>
    <Nav.Link className="navLink nav-link" href="/dessert" data-tip="Dessert" to="/dessert"><FaCookieBite/><ReactToolTip/></Nav.Link>
    <Nav.Link className="navLink nav-link" href="/drink" data-tip="Drink" to="/drink"><MdLocalDrink/><ReactToolTip/></Nav.Link>
    </Navbar.Collapse>
  </Navbar>
  </Col>
  </Row>
}
export default MiniNav;
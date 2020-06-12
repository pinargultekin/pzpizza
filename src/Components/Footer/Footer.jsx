import React from "react";
import {Navbar} from "react-bootstrap";
import Logo from "../Navbar/Logo";

function Footer(){
    const year = new Date().getFullYear();
 
    return  <div className="footer"> <Navbar bg="dark footer-nav">
    <Navbar.Brand className="footer-brand" href="/">
      <Logo/>
<p className="footer-p">PZ Pizza  &copy; {year}</p>
    </Navbar.Brand>
  </Navbar>
  </div>
}; 
export default Footer;
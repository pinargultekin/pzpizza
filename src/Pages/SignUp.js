import React, { Component } from "react";
import Navigation from "../Components/Navbar/Nav";
import Register from "../Components/Form/Register";
import Footer from "../Components/Footer/Footer";
import {Row} from "react-bootstrap";

class SignUp extends Component{
   render() {
      return <div className="main-cont">
      <Navigation />
      <Row>
      <Register />
      </Row>
      <Footer />
         </div>
   }
}

export default SignUp;
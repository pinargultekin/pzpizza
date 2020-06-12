import React, { Component } from "react";
import Navigation from "../Components/Navbar/Nav";
import Login from "../Components/Form/Login";
import Footer from "../Components/Footer/Footer";
import { Row } from "react-bootstrap";

class SignIn extends Component{
   render() {
      return <div className="main-cont">
      <Navigation />
      <Row>
      <Login /> 
      </Row>
      <Footer />
         </div>
   }
}

export default SignIn;
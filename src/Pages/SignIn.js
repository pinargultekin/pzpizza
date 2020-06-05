import React, { Component } from "react";
import Navigation from "../Components/Navbar/Nav";
import Login from "../Components/Form/Login";

class SignIn extends Component{
   render() {
      return <div className="main-cont">
      <Navigation />
      <Login />
         </div>
   }
}

export default SignIn;
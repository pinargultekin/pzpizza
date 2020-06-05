import React, { Component } from "react";
import Navigation from "../Components/Navbar/Nav";
import Register from "../Components/Form/Register";

class SignUp extends Component{
   render() {
      return <div className="main-cont">
      <Navigation />
      <Register />
         </div>
   }
}

export default SignUp;
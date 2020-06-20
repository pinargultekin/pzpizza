import React, { Component } from "react";
import Navigation from "../Components/Navbar/Nav";
import Footer from "../Components/Footer/Footer";
class Account extends Component{
    render(){
        return <div className="main-cont">
        <Navigation />
        
        <Footer />
           </div>
    }
}
export default Account;
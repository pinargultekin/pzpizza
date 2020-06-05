import React , {Component} from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Components/Navbar/Nav";
import HeaderPhoto from "../Components/Promophotos/HeaderPhoto";
import Menu from "../Components/Menu/Menu";
import menu from "../Menudata/menu";
import {Col} from "react-bootstrap";


class Landing extends Component{
    render() {
return <div className="main-cont">
     <Navigation />
     <HeaderPhoto/>
     <h2 className="menuh2">MENU</h2>
     <Col xs={9} className="categoryCard">      
     {menu.map(menu => (
         <Menu 
 key = {menu.id}
 title = {menu.itemName}
 img = {menu.itemImg}/>
     ))}
     </Col> 
 </div>
}
}
export default Landing;
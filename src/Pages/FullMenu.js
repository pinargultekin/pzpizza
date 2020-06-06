import React, { Component } from "react";
import {Col} from "react-bootstrap";
import Navigation from "../Components/Navbar/Nav";
import menu from "../Menudata/menu";
import Menu from "../Components/Menu/Menu";

class FullMenu extends Component{
    render(){
        return <div className="main-cont">
        <Navigation />
        <h2 className="fullMenu menuh2">MENU</h2>
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
export default FullMenu;
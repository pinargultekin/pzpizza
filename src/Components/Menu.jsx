import React from "react";
import MenuCards from "./MenuCards"
import {Card, CardGroup,Row, Col} from "react-bootstrap"


function Menu(props){
    return   <MenuCards 
  title= {props.title}
  img= {props.img}/>
}

export default Menu;
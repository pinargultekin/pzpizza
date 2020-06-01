import React from "react";
import MenuCards from "./MenuCards"
import {Card, CardGroup,Row, Col} from "react-bootstrap"


function Menu(props){
    return   <MenuCards 
  title= {props.title}
  img= {props.img}/>
   {/* <CardGroup  className="cardGroupRow"> */}
  {/* <MenuCards 
  title= {props.title2}
  img = {props.img2}/>
  <MenuCards 
  title= {props.title3}
  img = {props.img3}/> */}
  {/* </CardGroup> */}
  

  {/* <Col xs={9} className="categoryCard">
  <CardGroup  className="cardGroupRow">
  <MenuCards 
  title= {props.title4}
  img = {props.img4}/>
  <MenuCards 
  title= {props.title5}
  img = {props.img5}/>
  <MenuCards 
  title= {props.title6}
  img = {props.img6}/>
 
</CardGroup>
    </Col> */}
    
}

export default Menu;
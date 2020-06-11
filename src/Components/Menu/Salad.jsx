import React, { Component } from "react";
import {Col} from "react-bootstrap";
import Navigation from "../Navbar/Nav";
import PizzaCards from "../Cards/PizzaCards"
import {Salads} from "../../Menudata/Ingredients";
import MiniNav from "../Navbar/miniNav";

class Salad extends Component{
    render(){
        return <div className="main-cont">
            <Navigation />
            <h1 className= "menu-header">SALAD</h1>
            <MiniNav />
            <Col xs={9} className="categoryCard-pizza">  
            {Salads.map(Salads => (
                <PizzaCards 
                    key={Salads.id}
                    title= {Salads.name}
                    img={Salads.img}
                    menu={Salads.ingredients}
                    />
                    
            ))}
          </Col> 
        </div>
    }
}
export default Salad;
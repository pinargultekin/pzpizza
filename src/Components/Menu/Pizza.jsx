import React, { Component } from "react";
import {Col} from "react-bootstrap";
import Navigation from "../Navbar/Nav";
import PizzaCards from "../Cards/PizzaCards"
import {Pizzas} from "../../Menudata/Ingredients";

class Pizza extends Component{
    render(){
        return <div className="main-cont">
            <Navigation />
            <h1 className= "menu-header">PIZZA</h1>
            <Col xs={9} className="categoryCard-pizza">  
            {Pizzas.map(Pizzas => (
                <PizzaCards 
                    key={Pizzas.id}
                    title= {Pizzas.name}
                    img={Pizzas.img}
                    menu={Pizzas.ingredients}
                    />
                    
            ))}
          </Col> 
        </div>
    }
}
export default Pizza;
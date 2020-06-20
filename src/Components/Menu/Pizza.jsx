import React, { Component } from "react";
import {Col} from "react-bootstrap";
import Navigation from "../Navbar/Nav";
import PizzaCards from "../Cards/PizzaCards"
import {Pizzas} from "../../Menudata/Ingredients";
import MiniNav from "../Navbar/miniNav";
import Footer from "../Footer/Footer";
import menu from "../../Menudata/menu";

class Pizza extends Component{
    render(){
        const[pizza]=menu;
        return <div className="main-cont">
            <Navigation />
    <h1 className= "menu-header">{pizza.itemName}</h1>
            <MiniNav />
            <Col xs={9} className="categoryCard-pizza">  
            {Pizzas.map(Pizzas => (
                <PizzaCards 
                    key={Pizzas.id}
                    header={pizza.itemName}
                    title= {Pizzas.name}
                    img={Pizzas.img}
                    menu={Pizzas.ingredients}
                    price={Pizzas.price}
                    size={Pizzas.size}
                    />
                    
            ))}
          </Col> 
          <Footer />
        </div>
    }
}
export default Pizza;
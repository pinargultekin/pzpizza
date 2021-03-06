import React, { Component } from "react";
import {Col} from "react-bootstrap";
import Navigation from "../Navbar/Nav";
import PizzaCards from "../Cards/PizzaCards"
import {Drinks} from "../../Menudata/Ingredients";
import MiniNav from "../Navbar/miniNav";
import Footer from "../Footer/Footer";

class Drink extends Component{

    render(){
        return <div className="main-cont">
            <Navigation />
            <h1 className= "menu-header">DRINK</h1>
            <MiniNav />
            <Col xs={9} className="categoryCard-pizza">  
            {Drinks.map(Drinks => (
                <PizzaCards 
                    key={Drinks.id}
                    title= {Drinks.name}
                    img={Drinks.img}
                    menu={Drinks.ingredients}
                    price={Drinks.price}
                    size={Drinks.size}
                    />
                    
            ))}
          </Col> 
          <Footer />
        </div>
    }
}
export default Drink;
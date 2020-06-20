import React, { Component } from "react";
import {Col} from "react-bootstrap";
import Navigation from "../Navbar/Nav";
import PizzaCards from "../Cards/PizzaCards"
import {Sides} from "../../Menudata/Ingredients";
import MiniNav from "../Navbar/miniNav";
import Footer from "../Footer/Footer";

class Side extends Component{

    render(){
        return <div className="main-cont">
            <Navigation />
            <h1 className= "menu-header">SIDE</h1>
            <MiniNav />
            <Col xs={9} className="categoryCard-pizza">  
            {Sides.map(Sides => (
                <PizzaCards 
                    key={Sides.id}
                    title= {Sides.name}
                    img={Sides.img}
                    menu={Sides.ingredients}
                    price={Sides.price}
                    size={Sides.size}
                    />
                    
            ))}
          </Col> 
          <Footer />
        </div>
    }
}
export default Side;
import React, { Component } from "react";
import {Col} from "react-bootstrap";
import Navigation from "../Navbar/Nav";
import PizzaCards from "../Cards/PizzaCards"
import {Desserts} from "../../Menudata/Ingredients";
import MiniNav from "../Navbar/miniNav";
import Footer from "../Footer/Footer";

class Dessert extends Component{

    render(){
        return <div className="main-cont">
            <Navigation />
            <h1 className= "menu-header">DESSERT</h1>
            <MiniNav />
            <Col xs={9} className="categoryCard-pizza">  
            {Desserts.map(Desserts => (
                <PizzaCards 
                    key={Desserts.id}
                    title= {Desserts.name}
                    img={Desserts.img}
                    menu={Desserts.ingredients}
                    price={Desserts.price}
                    size={Desserts.size}
                    />
                    
            ))}
          </Col> 
          <Footer />
        </div>
    }
}
export default Dessert;
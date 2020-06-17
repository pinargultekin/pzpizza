import React, { Component } from "react";
import {Col} from "react-bootstrap";
import Navigation from "../Navbar/Nav";
import PizzaCards from "../Cards/PizzaCards"
import {Pastas} from "../../Menudata/Ingredients";
import MiniNav from "../Navbar/miniNav";
import Footer from "../Footer/Footer";

class Pasta extends Component{

    render(){
        return <div className="main-cont">
            <Navigation />
            <h1 className= "menu-header">PASTA</h1>
            <MiniNav />
            <Col xs={9} className="categoryCard-pizza">  
            {Pastas.map(Pastas => (
                <PizzaCards 
                    key={Pastas.id}
                    title= {Pastas.name}
                    img={Pastas.img}
                    menu={Pastas.ingredients}
                    price={Pastas.price}
                    size={Pastas.size}
                    />
                    
            ))}
          </Col> 
          <Footer />
        </div>
    }
}
export default Pasta;
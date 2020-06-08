import React, { Component } from "react";
import {Col} from "react-bootstrap";
import Navigation from "../Navbar/Nav";
import PizzaCards from "../Cards/PizzaCards"
import {Pastas} from "../../Menudata/Ingredients";

class Pasta extends Component{

    render(){
        return <div className="main-cont">
            <Navigation />
            <h1 className= "menu-header">PASTA</h1>
            <Col xs={9} className="categoryCard-pizza">  
            {Pastas.map(Pastas => (
                <PizzaCards 
                    key={Pastas.id}
                    title= {Pastas.name}
                    img={Pastas.img}
                    menu={Pastas.ingredients}
                    />
                    
            ))}
          </Col> 
        </div>
    }
}
export default Pasta;
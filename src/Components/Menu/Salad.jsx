import React, { Component } from "react";
import {Col} from "react-bootstrap";
import Navigation from "../Navbar/Nav";
import PastaCards from "../Cards/PastaCards"
import {Salads} from "../../Menudata/Ingredients";
import MiniNav from "../Navbar/miniNav";
import Footer from "../Footer/Footer";
import menu from "../../Menudata/menu";

class Salad extends Component{
    render(){
        const [,,salad]=menu;
        return <div className="main-cont">
            <Navigation />
    <h1 className= "menu-header">{salad.itemName}</h1>
            <MiniNav />
            <Col xs={9} className="categoryCard-pizza">  
            {Salads.map(Salads => (
                <PastaCards 
                    key={Salads.id}
                    header={salad.itemName}
                    title= {Salads.name}
                    img={Salads.img}
                    menu={Salads.ingredients}
                    price={Salads.price}
                    size={Salads.size}
                    />
                    
            ))}
          </Col> 
          <Footer />
        </div>
    }
}
export default Salad;
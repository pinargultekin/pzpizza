import React from "react";
import {Form} from "react-bootstrap"
import {Pizzas, Drinks} from "../../Menudata/Ingredients";
import menu from "../../Menudata/menu";

function Options(){
   const[{size: [first, second, third, forth]}] = Pizzas;
  //  const[{size: [st, nd, rd, th]}] = Drinks;
  //  console.log(st);
  // for(const {itemName} of menu){
  //      console.log(itemName)      
       
          return  (
            
          <Form.Group controlId="selectSize">
           <Form.Control as="select">
                <option>{first}</option>
                <option>{second}</option>
                <option>{third}</option>
                <option>{forth}</option>
                </Form.Control>
                </Form.Group>
          )
{/* 
                {itemName === "Drink" && 
                <Form.Group controlId="selectSize">
                <Form.Control as="select">
                <option>{st}</option>
                <option>{nd}</option>
                <option>{rd}</option>
                <option>{th}</option>
                </Form.Control>
            </Form.Group>
                }  */}
                      
        }
    
    export default Options;
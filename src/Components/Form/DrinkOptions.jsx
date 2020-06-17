import React from "react";
import {Form} from "react-bootstrap"
import {Drinks} from "../../Menudata/Ingredients";

function DrinkOptions(){
 
   const[{id}, {size: [st, nd, rd, th]}] = Drinks;
   console.log(st);

          return (     
                <Form.Group controlId="selectSize">
                <Form.Control as="select">
                <option>{st}</option>
                <option>{nd}</option>
                <option>{rd}</option>
                <option>{th}</option>
                </Form.Control>
                </Form.Group>
               )            
        
   }
    
    export default DrinkOptions;
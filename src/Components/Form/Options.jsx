import React, {useState} from "react";
import Select from "react-select";
import {Col, Row} from "react-bootstrap"
import {Pizzas} from "../../Menudata/Ingredients";
// import menu from "../../Menudata/menu";

function Options(props){
   const[{size: [first, second, third, forth]},
   {price:[st, nd, rd, th]} ] = Pizzas;
   
  const count=props.count;
  const price=props.price;
  const sizes = [
      {value: st, label:first},
      {value: nd, label:second},
      {value: rd, label:third},
      {value: th, label:forth},
    ];
  
  const [selectedValue, setSelectedValue] = useState(price[0]);
  const handleChange = e => {
    setSelectedValue(e.value);
  };
  const sum = (count * selectedValue).toFixed(2);
  
          return  (
          <Row>
            <Col md={6} id="size">
            <Select 
            placeholder="Size"
            value={sizes.find(obj => obj.value === selectedValue)}
            options={sizes} 
            onChange={handleChange}
             />
           </Col>
           <Col md={6} id="pz-sum">
           <span className="price-tag" id="price-tag">$ {sum} </span>
           </Col>
           </Row>
          
          )                      
        }
    
    export default Options;
import React, {useState} from "react";
import {Row, Col} from "react-bootstrap"
import {Drinks} from "../../Menudata/Ingredients";
import Select from "react-select";

function DrinkOptions(props){
 
      const[{size: [first, second]},
            {price: [st, nd ]}] = Drinks;
      const count=props.count;
      const price=props.price;
      const ddown = [
            {value: st, label:first},
            {value: nd, label:second},
      ];
      const [selectedValue, setSelectedValue] = useState(price[0]);
      const handleChange = e => {
      setSelectedValue(e.value);
      };
      const sum = (count * selectedValue).toFixed(2);
   return (     
      <Row>
      <Col md={7} id="d-size">
      <Select 
      placeholder="Size"
      value={ddown.find(obj => obj.value === selectedValue)}
      options={ddown} 
      onChange={handleChange}
       />
     </Col>
     <Col md={5} id="d-sum">
     <span className="price-tag" id="price-tag">$ {sum} </span>
     </Col>
     </Row>
               )            
        
   }
    
    export default DrinkOptions;
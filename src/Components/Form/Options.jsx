import React, { useState } from "react";
import Select from "react-select";
import { Col, Row } from "react-bootstrap"
import { Pizzas } from "../../Menudata/Ingredients";
// import { set } from "mongoose";
// import menu from "../../Menudata/menu";




function Options(props) {

  // console.log("this is options props", props);


  const [{ size: [first, second, third, forth] },
    { price: [st, nd, rd, th] }] = Pizzas;

  const count = props.count;
  const price = props.price;
  const sizes = [
    { value: st, label: first },
    { value: nd, label: second },
    { value: rd, label: third },
    { value: th, label: forth },
  ];

  const [selectedValue, setSelectedValue] = useState(price[0]);
  const handleChange = e => {
    setSelectedValue(e.value);
    // console.log(e);

    props.getItem({
      size: e.label,
      price: e.value,
    })

  };
  const sum = (count * selectedValue).toFixed(2);
  // console.log(selectedValue);

  return (
    <Row>
      <Col md={6}>
        <Select
          placeholder="Size"
          value={sizes.find(obj => obj.value === selectedValue)}
          options={sizes}
          onChange={handleChange}
        />
      </Col>
      <Col md={6}>
        <span className="price-tag" id="price-tag">$ {sum} </span>
      </Col>
    </Row>

  )
}

export default Options;
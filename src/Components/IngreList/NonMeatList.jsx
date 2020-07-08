import React, { useState } from "react";
import { Form } from "react-bootstrap";
// import { Pizzas, Pastas, Salads } from "../../Menudata/Ingredients";
import Menu from "../../Menudata/menu";

function NonMeatList(props) {
  // const [{ itemVegieTop: pizzaVegTop },
  //   { itemVegieTop: pastaVegTop },
  //   { itemVegieTop: saladVegTop }] = menu;
  // const [pzvt1, pzvt2, pzvt3, pzvt4, pzvt5, pzvt6, pzvt7, pzvt8, pzvt9, pzvt10, pzvt11, pzvt12, pzvt13, pzvt14, pzvt15] = pizzaVegTop;
  // const [psvt1, psvt2, psvt3, psvt4, psvt5, psvt6, psvt7, psvt8, psvt9, psvt10, psvt11, psvt12] = pastaVegTop;
  // const [sdvt1, sdvt2, sdvt3, sdvt4, sdvt5, sdvt6, sdvt7, sdvt8, sdvt9, sdvt10, sdvt11, sdvt12, sdvt13, sdvt14, sdvt15, sdvt16, sdvt17, sdvt18, sdvt19, sdvt20, sdvt21, sdvt22, sdvt23, sdvt24] = saladVegTop;

  const pizzaVegTop = Menu[0].itemVegieTop;
  const pastaVegTop = Menu[1].itemVegieTop;
  const saladVegTop = Menu[2].itemVegieTop;

  const itemIngre = props.ingredients;
  // console.log(itemIngre);
  const intersecPz3 = itemIngre.filter(element => pizzaVegTop.includes(element))
  const intersecPs3 = itemIngre.filter(element => pastaVegTop.includes(element))
  const intersecSd3 = itemIngre.filter(element => saladVegTop.includes(element))
  // const allIntersec = [intersecPz, intersecPs, intersecSd]
  const header = props.header;
  // console.log(intersecPz)
  
  const [checked, setChecked] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    console.log("clicked");
  };

  function handleChange(e){
    let itemVal = e.target.value
    console.log(itemVal);
  }

  return (<Form className="ckList">
    {
    header === "Pizza" ?
    <Form.Group>
      {pizzaVegTop.map(item => {
      return (<Form.Check checked={intersecPz3.includes(item)} onChange={handleChange} onClick={handleClick} className="mtcheckbox" value={item} type="checkbox" label={item} />)
      })}
    </Form.Group>
    :
    header === "Pasta" ?
    <Form.Group >
      {pastaVegTop.map(item => {
        return (<Form.Check checked={intersecPs3.includes(item)} className="mtcheckbox" value={item} type="checkbox" label={item} />)
      })}
    </Form.Group>
    :
    <Form.Group>
      {saladVegTop.map(item => {
      return (<Form.Check checked={intersecSd3.includes(item)} className="mtcheckbox" value={item} type="checkbox" label={item} />)
      })}
    </Form.Group>
    } 
  </Form>

  )
}
export default NonMeatList;
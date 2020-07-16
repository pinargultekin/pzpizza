import React from "react";
import { Form } from "react-bootstrap";
import Menu from "../../Menudata/menu";

function NonMeatList(props) {
  const pizzaVegTop = Menu[0].itemVegieTop;
  const pastaVegTop = Menu[1].itemVegieTop;
  const saladVegTop = Menu[2].itemVegieTop;
  const itemIngre = props.ingredients;
  const intersecPz3 = itemIngre.filter(element => pizzaVegTop.includes(element))
  const intersecPs3 = itemIngre.filter(element => pastaVegTop.includes(element))
  const intersecSd3 = itemIngre.filter(element => saladVegTop.includes(element))
  const header = props.header;

 const[pizzaVal, setPizzaVal] = React.useState(intersecPz3);
 const[pastaVal, setPastaVal] = React.useState(intersecPs3);
 const[saladVal, setSaladVal] = React.useState(intersecSd3);

  //LATER UPDATE!! call the handle...Change function once!
 function handlePizzaChange(e) {
  const newPizzaVal = e.target.value;
  if (pizzaVal.includes(newPizzaVal)) {
    setPizzaVal(pV => {
      return pV.filter((item, index) => {
        return (item !== newPizzaVal)
      })
    })
  } else {
    return setPizzaVal(pV => {
      return [...pV, newPizzaVal]
    })
  }
}
// console.log(pizzaVal);
 function handlePastaChange(e) {
  const newPastaVal = e.target.value;
  if (pastaVal.includes(newPastaVal)) {
    setPastaVal(pV => {
      return pV.filter((item, index) => {
        return (item !== newPastaVal)
      })
    })
  } else {
    return setPastaVal(pV => {
      return [...pV, newPastaVal]
    })
  }
}
// console.log(pastaVal);
 function handleSaladChange(e) {
  const newSaladVal = e.target.value;
  if (saladVal.includes(newSaladVal)) {
    setSaladVal(pV => {
      return pV.filter((item, index) => {
        return (item !== newSaladVal)
      })
    })
  } else {
    return setSaladVal(pV => {
      return [...pV, newSaladVal]
    })
  }
}
// console.log(saladVal);

  return (<Form className="ckList">
    {
    header === "Pizza" ?
    <Form.Group>
      {pizzaVegTop.map((item,index) => { 
      return (<Form.Check key={item} id={index} checked={pizzaVal.includes(item)} onChange={handlePizzaChange} className="mtcheckbox" value={item} type="checkbox" label={item} />)
      })}
    
    </Form.Group>
    :
    header === "Pasta" ?
    <Form.Group >
      {pastaVegTop.map(item => {
        return (<Form.Check key={item} checked={pastaVal.includes(item)} onChange={handlePastaChange} className="mtcheckbox" value={item} type="checkbox" label={item} />)
      })}
    </Form.Group>
    :
    <Form.Group>
      {saladVegTop.map(item => {
      return (<Form.Check key={item} checked={saladVal.includes(item)} onChange={handleSaladChange} className="mtcheckbox" value={item} type="checkbox" label={item} />)
      })}
    </Form.Group>
    } 
  </Form>

  )
}
export default NonMeatList;
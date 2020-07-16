import React from "react";
import { Form } from "react-bootstrap";
import Menu from "../../Menudata/menu";

function MeatList(props) {

  const header = props.header;
  const pizzaMeatTop = Menu[0].itemMeatTop;
  const pastaMeatTop = Menu[1].itemMeatTop;
  const saladMeatTop = Menu[2].itemMeatTop;
  const itemIngre = props.ingredients;
  const intersecPz1 = itemIngre.filter(element => pizzaMeatTop.includes(element))
  const intersecPs1 = itemIngre.filter(element => pastaMeatTop.includes(element))
  const intersecSd1 = itemIngre.filter(element => saladMeatTop.includes(element))

  const[pizzaVal, setPizzaVal] = React.useState(intersecPz1);
  const[pastaVal, setPastaVal] = React.useState(intersecPs1);
  const[saladVal, setSaladVal] = React.useState(intersecSd1);
  
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
  console.log(pizzaVal);
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
  console.log(pastaVal);
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
  console.log(saladVal);
  return (
    <Form className="ckList">

      {
        header === "Pizza" ?
        <Form.Group>
                {pizzaMeatTop.map(item => {
                return (<Form.Check key={item} checked={pizzaVal.includes(item)} onChange={handlePizzaChange} className="mtcheckbox" value={item} type="checkbox" label={item} />)
                })}
        </Form.Group>
        : 
        header === "Pasta" ?
        <Form.Group >
                {pastaMeatTop.map(item => {
                return (<Form.Check key={item} checked={pastaVal.includes(item)} onChange={handlePastaChange} className="mtcheckbox" value={item} type="checkbox" label={item} />)
                })}
        </Form.Group>
        :
        <Form.Group>
                {saladMeatTop.map(item => {
                return (<Form.Check key={item} checked={saladVal.includes(item)} onChange={handleSaladChange} className="mtcheckbox" value={item} type="checkbox" label={item} />)
                })}
        </Form.Group>
      }
    </Form>
  )
}
export default MeatList;
import React from "react";
import { Form } from "react-bootstrap";
import Menu from "../../Menudata/menu";

function SauceList(props) {
  const pizzaSauce = Menu[0].itemSauce;
  const pastaSauce = Menu[1].itemSauce;
  const saladSauce = Menu[2].itemSauce;

  const itemIngre = props.ingredients;
  const intersecPz2 = itemIngre.filter(element => pizzaSauce.includes(element))
  const intersecPs2 = itemIngre.filter(element => pastaSauce.includes(element))
  const intersecSd2 = itemIngre.filter(element => saladSauce.includes(element))
  const header = props.header;
  
  const[pizzaVal, setPizzaVal] = React.useState(intersecPz2);
  const[pastaVal, setPastaVal] = React.useState(intersecPs2);
  const[saladVal, setSaladVal] = React.useState(intersecSd2);

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
  
  return (<Form className="ckList">
    {
    header === "Pizza" ?
    <Form.Group>
      {pizzaSauce.map(item => {
      return (<Form.Check key={item} checked={pizzaVal.includes(item)} onChange={handlePizzaChange} className="mtcheckbox" value={item} type="checkbox" label={item} />)
      })}
    </Form.Group>
    :
    header === "Pasta" ?
    <Form.Group >
        {pastaSauce.map(item => {
        return (<Form.Check key={item} checked={pastaVal.includes(item)} onChange={handlePastaChange} className="mtcheckbox" value={item} type="checkbox" label={item} />)
        })}
    </Form.Group>
    :
    <Form.Group>
      {saladSauce.map(item => {
        return (<Form.Check key={item} checked={saladVal.includes(item)} onChange={handleSaladChange} className="mtcheckbox" value={item} type="checkbox" label={item} />)
      })}
    </Form.Group>
    }

  </Form>
  )
}
export default SauceList;
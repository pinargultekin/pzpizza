import React from "react";
import { Form } from "react-bootstrap";
import Menu from "../../Menudata/menu";

function SauceList(props) {
  // const header = props.header;
  // const [{ itemSauce: pizzaSauce },
  //   { itemSauce: pastaSauce },
  //   { itemSauce: saladSauce }] = menu;
  // const [pzs1, pzs2, pzs3, pzs4, pzs5, pzs6, pzs7] = pizzaSauce;
  // const [pss1, pss2, pss3, pss4, pss5,] = pastaSauce;
  // const [sds1, sds2, sds3, sds4, sds5, sds6, sds7, sds8, sds9, sds10] = saladSauce;

  // const itemIngre = props.ingredients;
  // const intersecPz = itemIngre.filter(element => pizzaSauce.includes(element))
  // const intersecPs = itemIngre.filter(element => pastaSauce.includes(element))
  // const intersecSd = itemIngre.filter(element => saladSauce.includes(element))

  const pizzaSauce = Menu[0].itemSauce;
  const pastaSauce = Menu[1].itemSauce;
  const saladSauce = Menu[2].itemSauce;

  const itemIngre = props.ingredients;
  // console.log(itemIngre);
  const intersecPz2 = itemIngre.filter(element => pizzaSauce.includes(element))
  const intersecPs2 = itemIngre.filter(element => pastaSauce.includes(element))
  const intersecSd2 = itemIngre.filter(element => saladSauce.includes(element))
  // const allIntersec = [intersecPz, intersecPs, intersecSd]
  const header = props.header;
  // console.log(intersecPz)
  return (<Form className="ckList">
    {
    header === "Pizza" ?
    <Form.Group>
      {pizzaSauce.map(item => {
      return (<Form.Check key={item} checked={intersecPz2.includes(item)} className="mtcheckbox" value={item} type="checkbox" label={item} />)
      })}
    </Form.Group>
    :
    header === "Pasta" ?
    <Form.Group >
        {pastaSauce.map(item => {
        return (<Form.Check key={item} checked={intersecPs2.includes(item)} className="mtcheckbox" value={item} type="checkbox" label={item} />)
        })}
    </Form.Group>
    :
    <Form.Group>
      {saladSauce.map(item => {
        return (<Form.Check key={item} checked={intersecSd2.includes(item)} className="mtcheckbox" value={item} type="checkbox" label={item} />)
      })}
    </Form.Group>
    }

  </Form>
  )
}
export default SauceList;
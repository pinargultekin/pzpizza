import React from "react";
import { Form } from "react-bootstrap";
import Menu from "../../Menudata/menu";

function MeatList(props) {

  const header = props.header;
//   const [{ itemMeatTop: pizzaMeatTop },
//     { itemMeatTop: pastaMeatTop },
//     { itemMeatTop: saladMeatTop }] = menu;
//   const [pzmt1, pzmt2, pzmt3, pzmt4, pzmt5, pzmt6, pzmt7, pzmt8] = pizzaMeatTop;
//   const [psmt1, psmt2, psmt3, psmt4, psmt5, psmt6, psmt7, psmt8] = pastaMeatTop;
//   const [sdmt1, sdmt2, sdmt3] = saladMeatTop;

  const pizzaMeatTop = Menu[0].itemMeatTop;
  const pastaMeatTop = Menu[1].itemMeatTop;
  const saladMeatTop = Menu[2].itemMeatTop;
  const itemIngre = props.ingredients;
  const intersecPz1 = itemIngre.filter(element => pizzaMeatTop.includes(element))
  const intersecPs1 = itemIngre.filter(element => pastaMeatTop.includes(element))
  const intersecSd1 = itemIngre.filter(element => saladMeatTop.includes(element))

  return (
    <Form className="ckList">

      {
        header === "Pizza" ?
        <Form.Group>
                {pizzaMeatTop.map(item => {
                return (<Form.Check checked={intersecPz1.includes(item)} className="mtcheckbox" value={item} type="checkbox" label={item} />)
                })}
        </Form.Group>
        : 
        header === "Pasta" ?
        <Form.Group >
                {pastaMeatTop.map(item => {
                return (<Form.Check checked={intersecPs1.includes(item)} className="mtcheckbox" value={item} type="checkbox" label={item} />)
                })}
        </Form.Group>
        :
        <Form.Group>
                {saladMeatTop.map(item => {
                return (<Form.Check checked={intersecSd1.includes(item)} className="mtcheckbox" value={item} type="checkbox" label={item} />)
                })}
        </Form.Group>
      }
    </Form>
  )
}
export default MeatList;
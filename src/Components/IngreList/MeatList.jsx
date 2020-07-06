import React from "react";
import {Form} from "react-bootstrap";
import menu from "../../Menudata/menu";

function MeatList(props){

const header = props.header;
const[  {itemMeatTop:pizzaMeatTop},
        {itemMeatTop:pastaMeatTop},
        {itemMeatTop:saladMeatTop}] = menu;
const[pzmt1,pzmt2,pzmt3,pzmt4,pzmt5,pzmt6,pzmt7,pzmt8] = pizzaMeatTop;
const[psmt1,psmt2,psmt3,psmt4,psmt5,psmt6,psmt7,psmt8] = pastaMeatTop;
const[sdmt1,sdmt2,sdmt3] = saladMeatTop;

return(
        <Form className="ckList">
        
        {
        //! LATER UPDATE: use for loop
        header === "Pizza" ?
        <Form.Group >
          <Form.Check className="mtcheckbox" type="checkbox" label={pzmt1} />
          <Form.Check className="mtcheckbox" type="checkbox" label={pzmt2} />
          <Form.Check className="mtcheckbox" type="checkbox" label={pzmt3} />
          <Form.Check className="mtcheckbox" type="checkbox" label={pzmt4} />
          <Form.Check className="mtcheckbox" type="checkbox" label={pzmt5} />
          <Form.Check className="mtcheckbox" type="checkbox" label={pzmt6} />
          <Form.Check className="mtcheckbox" type="checkbox" label={pzmt7} />
          <Form.Check className="mtcheckbox" type="checkbox" label={pzmt8} />
        </Form.Group>
        : header === "Pasta" ?
        <Form.Group >
          <Form.Check className="mtcheckbox" type="checkbox" label={psmt1} />
          <Form.Check className="mtcheckbox" type="checkbox" label={psmt2} />
          <Form.Check className="mtcheckbox" type="checkbox" label={psmt3} />
          <Form.Check className="mtcheckbox" type="checkbox" label={psmt4} />
          <Form.Check className="mtcheckbox" type="checkbox" label={psmt5} />
          <Form.Check className="mtcheckbox" type="checkbox" label={psmt6} />
          <Form.Check className="mtcheckbox" type="checkbox" label={psmt7} />
          <Form.Check className="mtcheckbox" type="checkbox" label={psmt8} />
        </Form.Group>
        :
        <Form.Group >
          <Form.Check className="mtcheckbox" type="checkbox" label={sdmt1} />
          <Form.Check className="mtcheckbox" type="checkbox" label={sdmt2} />
          <Form.Check className="mtcheckbox" type="checkbox" label={sdmt3} />
        </Form.Group>
        }
        </Form>
)
}
export default MeatList;
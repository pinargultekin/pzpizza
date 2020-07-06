import React from "react";
import {Form} from "react-bootstrap";
import menu from "../../Menudata/menu";

function NonMeatList(props){
    const header = props.header;
    const[  {itemVegieTop:pizzaVegTop},
            {itemVegieTop:pastaVegTop},
            {itemVegieTop:saladVegTop}] = menu;
    const[pzvt1,pzvt2,pzvt3,pzvt4,pzvt5,pzvt6,pzvt7,pzvt8,pzvt9,pzvt10,pzvt11,pzvt12,pzvt13,pzvt14,pzvt15] = pizzaVegTop;
    const[psvt1,psvt2,psvt3,psvt4,psvt5,psvt6,psvt7,psvt8,psvt9,psvt10,psvt11,psvt12] = pastaVegTop;
    const[sdvt1,sdvt2,sdvt3,sdvt4,sdvt5,sdvt6,sdvt7,sdvt8,sdvt9,sdvt10,sdvt11,sdvt12,sdvt13,sdvt14,sdvt15,sdvt16,sdvt17,sdvt18,sdvt19,sdvt20,sdvt21,sdvt22,sdvt23,sdvt24] = saladVegTop;
    return( <Form  className="ckList">
      {
        //! LATER UPDATE: use for loop
        header ==="Pizza" ?
        <Form.Group >
          <Form.Check className="mtcheckbox"  type="checkbox" label={pzvt1} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={pzvt2} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={pzvt3} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={pzvt4} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={pzvt5} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={pzvt6} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={pzvt7} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={pzvt8} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={pzvt9} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={pzvt10} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={pzvt11} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={pzvt12} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={pzvt13} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={pzvt14} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={pzvt15} />
        </Form.Group>
      : header ==="Pasta" ?
        <Form.Group >
          <Form.Check className="mtcheckbox"  type="checkbox" label={psvt1} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={psvt2} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={psvt3} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={psvt4} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={psvt5} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={psvt6} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={psvt7} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={psvt8} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={psvt9} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={psvt10} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={psvt11} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={psvt12} />
        </Form.Group>
      :
        <Form.Group >
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt1} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt2} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt3} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt4} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt5} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt6} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt7} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt8} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt9} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt10} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt11} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt12} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt13} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt14} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt15} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt16} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt17} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt18} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt19} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt20} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt21} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt22} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt23} />
          <Form.Check className="mtcheckbox"  type="checkbox" label={sdvt24} />
        </Form.Group>
      }      
        </Form>
    )
}
export default NonMeatList;
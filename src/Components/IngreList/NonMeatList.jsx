import React from "react";
import {Form} from "react-bootstrap";
import menu from "../../Menudata/menu";

function NonMeatList(){
    const[pizza,pasta,salad]=menu;
    const{itemType:crust, itemSauce:pizzaSauce, itemMeatTop:pizzaMeatTop, itemVegieTop:pizzaNonMeatTop} = pizza;
    // const{itemType:pastaType,itemSauce:pastaSauce, itemMeatTop:pastaMeatTop, itemVegieTop:pastaNonMeatTop} = pasta;
    // const{itemType:base, itemSauce:dressing, itemMeatTop:saladMeatTop, itemVegieTop:saladNonMeatTop} = salad;
    
    console.log(pizzaNonMeatTop);
    const[pzvt1,pzvt2,pzvt3,pzvt4,pzvt5,pzvt6,pzvt7,pzvt8,pzvt9,pzvt10,pzvt11,pzvt12,pzvt13,pzvt14,pzvt15] = pizzaNonMeatTop;
    return( <Form  className="ckList">
             <Form.Group controlId="formBasicCheckbox">
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
        </Form>
    )
}
export default NonMeatList;
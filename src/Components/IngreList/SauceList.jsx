import React from "react";
import {Form} from "react-bootstrap";
import menu from "../../Menudata/menu";

function SauceList(){
    const[pizza,pasta,salad]=menu;
    const{itemType:crust, itemSauce:pizzaSauce, itemMeatTop:pizzaMeatTop, itemVegieTop:pizzaNonMeatTop} = pizza;
    const{itemType:pastaType,itemSauce:pastaSauce, itemMeatTop:pastaMeatTop, itemVegieTop:pastaNonMeatTop} = pasta;
    const{itemType:base, itemSauce:dressing, itemMeatTop:saladMeatTop, itemVegieTop:saladNonMeatTop} = salad;
    const[pzs1,pzs2,pzs3,pzs4,pzs5,pzs6,pzs7] = pizzaSauce;
    return( <Form className="ckList">
             <Form.Group controlId="formBasicCheckbox">
        <Form.Check className="mtcheckbox" type="checkbox" label={pzs1} />
        <Form.Check className="mtcheckbox" type="checkbox" label={pzs2} />
        <Form.Check className="mtcheckbox" type="checkbox" label={pzs3} />
        <Form.Check className="mtcheckbox" type="checkbox" label={pzs4} />
        <Form.Check className="mtcheckbox" type="checkbox" label={pzs5} />
        <Form.Check className="mtcheckbox" type="checkbox" label={pzs6} />
        <Form.Check className="mtcheckbox" type="checkbox" label={pzs7} />
      </Form.Group>
        </Form>
    )
}
export default SauceList;
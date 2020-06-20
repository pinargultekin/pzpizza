import React from "react";
import {Form} from "react-bootstrap";
import menu from "../../Menudata/menu";

function MeatList(props){
const[pizza]=menu;
const{itemMeatTop:pizzaMeatTop} = pizza;
// const{itemType:pastaType,itemSauce:pastaSauce, itemMeatTop:pastaMeatTop, itemVegieTop:pastaNonMeatTop} = pasta;
// const{itemType:base, itemSauce:dressing, itemMeatTop:saladMeatTop, itemVegieTop:saladNonMeatTop} = salad;
const[pzmt1,pzmt2,pzmt3,pzmt4,pzmt5,pzmt6,pzmt7,pzmt8] = pizzaMeatTop;
// const header = props.header;
return(
        <Form className="ckList">
        <Form.Group controlId="formBasicCheckbox">
        <Form.Check className="mtcheckbox" type="checkbox" label={pzmt1} />
        <Form.Check className="mtcheckbox" type="checkbox" label={pzmt2} />
        <Form.Check className="mtcheckbox" type="checkbox" label={pzmt3} />
        <Form.Check className="mtcheckbox" type="checkbox" label={pzmt4} />
        <Form.Check className="mtcheckbox" type="checkbox" label={pzmt5} />
        <Form.Check className="mtcheckbox" type="checkbox" label={pzmt6} />
        <Form.Check className="mtcheckbox" type="checkbox" label={pzmt7} />
        <Form.Check className="mtcheckbox" type="checkbox" label={pzmt8} />
        </Form.Group>
        </Form>
)
}
export default MeatList;
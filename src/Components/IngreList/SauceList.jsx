import React from "react";
import {Form} from "react-bootstrap";
import menu from "../../Menudata/menu";

function SauceList(props){
  const header = props.header;
  const[ {itemSauce:pizzaSauce},
         {itemSauce:pastaSauce},
         {itemSauce:saladSauce}] = menu;
  const[pzs1,pzs2,pzs3,pzs4,pzs5,pzs6,pzs7] = pizzaSauce;
  const[pss1,pss2,pss3,pss4,pss5,] = pastaSauce;
  const[sds1,sds2,sds3,sds4,sds5,sds6,sds7,sds8,sds9,sds10] = saladSauce; 
    
    return( <Form className="ckList">
      {
        //! LATER UPDATE: use for loop
        header === "Pizza" ?
        <Form.Group >
        <Form.Check className="mtcheckbox" value={pzs1} type="checkbox" label={pzs1} />
        <Form.Check className="mtcheckbox" value={pzs2} type="checkbox" label={pzs2} />
        <Form.Check className="mtcheckbox" value={pzs3} type="checkbox" label={pzs3} />
        <Form.Check className="mtcheckbox" value={pzs4} type="checkbox" label={pzs4} />
        <Form.Check className="mtcheckbox" value={pzs5} type="checkbox" label={pzs5} />
        <Form.Check className="mtcheckbox" value={pzs6} type="checkbox" label={pzs6} />
        <Form.Check className="mtcheckbox" value={pzs7} type="checkbox" label={pzs7} />
       </Form.Group>
       :
       header === "Pasta" ?
       <Form.Group >
        <Form.Check className="mtcheckbox" value={pss1} type="checkbox" label={pss1} />
        <Form.Check className="mtcheckbox" value={pss2} type="checkbox" label={pss2} />
        <Form.Check className="mtcheckbox" value={pss3} type="checkbox" label={pss3} />
        <Form.Check className="mtcheckbox" value={pss4} type="checkbox" label={pss4} />
        <Form.Check className="mtcheckbox" value={pss5} type="checkbox" label={pss5} />
      </Form.Group>
      :
      <Form.Group >
        <Form.Check className="mtcheckbox" value={sds1} type="checkbox" label={sds1} />
        <Form.Check className="mtcheckbox" value={sds2} type="checkbox" label={sds2} />
        <Form.Check className="mtcheckbox" value={sds3} type="checkbox" label={sds3} />
        <Form.Check className="mtcheckbox" value={sds4} type="checkbox" label={sds4} />
        <Form.Check className="mtcheckbox" value={sds5} type="checkbox" label={sds5} />
        <Form.Check className="mtcheckbox" value={sds6} type="checkbox" label={sds6} />
        <Form.Check className="mtcheckbox" value={sds7} type="checkbox" label={sds7} />
        <Form.Check className="mtcheckbox" value={sds8} type="checkbox" label={sds8} />
        <Form.Check className="mtcheckbox" value={sds9} type="checkbox" label={sds9} />
        <Form.Check className="mtcheckbox" value={sds10} type="checkbox" label={sds10} />
      </Form.Group>
      }
             
        </Form>
    )
}
export default SauceList;
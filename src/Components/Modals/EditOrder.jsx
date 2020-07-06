import React from "react";
import {Modal, Button, Tabs, Tab} from "react-bootstrap";
import MeatList from "../IngreList/MeatList"
import NonMeatList from "../IngreList/NonMeatList"
import SauceList from "../IngreList/SauceList"

function EditOrder(props){
    
        return  <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Your Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Tabs defaultActiveKey="MeatTops" transition={false} id="noanim-tab-example">
  <Tab eventKey="MeatTops" title="Meat Toppings">
  <MeatList 
  header={props.header}/>
  </Tab>
  <Tab eventKey="NonMeat" title="Non-Meat Toppings">
    <NonMeatList 
    header={props.header}/>
  </Tab>
  <Tab eventKey="Sauce" title="Sauce">
    <SauceList 
    header={props.header}/>
  </Tab>
</Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button className="edit-btn" onClick={props.onHide}>Close</Button>
          <Button className="edit-btn" >Save</Button>
        </Modal.Footer>
      </Modal>
    }

export default EditOrder;
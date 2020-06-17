import React from "react";
import {Modal, Button} from "react-bootstrap";

function EditOrder(props){
    
        return  <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Successful!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ingredients

          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="edit-btn" onClick={props.onHide}>Close</Button>
          <Button className="edit-btn" >Save</Button>
        </Modal.Footer>
      </Modal>
    }

export default EditOrder;
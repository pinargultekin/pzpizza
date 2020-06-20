import React from "react";
import {Modal, Button} from "react-bootstrap";

function AddCart(props){
    
        return  <Modal
        {...props}
        size="md"
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
            Your order `order name here` added to your cart! 
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="edit-btn" onClick={props.onHide}>Close</Button>
          <Button className="edit-btn" href="/cart">Go to Cart</Button>
        </Modal.Footer>
      </Modal>
    }

export default AddCart;
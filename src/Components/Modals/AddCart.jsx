import React from "react";
import { Modal, Button } from "react-bootstrap";


function AddCart(props) {



  return <Modal
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
        <b>count:{props.count} size:{props.size}  x   title:{props.title} price:{props.count * props.price} </b> added to your cart!
          </p>
    </Modal.Body>
    <Modal.Footer>
      <Button className="edit-btn" onClick={props.onHide}>Close</Button>
      <Button className="edit-btn" href="/cart">Go to Cart</Button>
    </Modal.Footer>
  </Modal>
}

export default AddCart;
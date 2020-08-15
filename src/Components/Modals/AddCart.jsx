import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux"
import addtocart from "../../reducers/actions/addtocart"


function AddCart(props) {

  const state = {
    count: props.count,
    size: props.size,
    title: props.title,
    totalPrice: (props.count * props.price)
  }

  function handleClick(e) {
    e.preventDefault();
    props.addtocart(state)
  }

  return <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton
    >
      <Modal.Title id="contained-modal-title-vcenter">
        Hello!
          </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        <b>You would like to add {props.count} of {props.size} {props.title} with the price of {(props.count * props.price).toFixed(2)}</b>
      </p>
    </Modal.Body>

    <Modal.Footer >
      <Button className="edit-btn" onClick={props.onHide}>Close</Button>
      <Button className="edit-btn" href="/cart" onClick={handleClick}>Confirm</Button>
    </Modal.Footer>
  </Modal>
}

const mapDispatchToProps = (dispatch) => {
  return {
    addtocart: (project) => dispatch(addtocart(project))
  };
};

export default connect(null, mapDispatchToProps)(AddCart);
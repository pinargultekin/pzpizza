import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux"


function AddCart(props) {

  // console.log("AddCart Props", props);

  // function handleClick(e) {
  //   e.preventDefault();
  //   props.addtocard()

  // }

  return <Modal


    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton
    >
      <Modal.Title id="contained-modal-title-vcenter">
        Successful!
          </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        <b>count:{props.count} size:{props.size}  x   title:{props.title} price:{(props.count * props.price).toFixed(2)}</b> added to your cart!
          </p>
    </Modal.Body>

    <Modal.Footer >
      <Button className="edit-btn" onClick={props.onHide}>Close</Button>
      <Button className="edit-btn" href="/cart" onClick={props.addtocard((props.count * props.price))}>Go to Cart</Button>
    </Modal.Footer>
  </Modal>
}


function mapDispatchToProps(dispatch, props) {
  return {
    addtocard: (res) => dispatch({ type: "ADD_ITEM", price: res })
  }

}


export default connect(null, mapDispatchToProps)(AddCart);

// export default AddCart;



// const addtocard = () => {
//   dispatch({
//     type: "ADD_ITEM", price: (props.price * props.count)
//   })
// }
// return {
//   addtocard
// }
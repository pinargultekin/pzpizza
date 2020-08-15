import React, { useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { FiEdit3 } from "react-icons/fi";
import { MdAddShoppingCart } from "react-icons/md";
import { TiPlusOutline } from "react-icons/ti";
import { TiMinusOutline } from "react-icons/ti";
import ReactToolTip from "react-tooltip";
import EditOrder from "../Modals/EditOrder";
import AddCart from "../Modals/AddCart";
import Options from "../Form/Options";
import DrinkOptions from "../Form/DrinkOptions";
// import { connect } from "react-redux"
// import redux from "redux"

// import menu from "../../Menudata/menu";

function PizzaCards(props) {

  // console.log("PizzaCard props", props);

  const [cartItems, setCartItems] = useState({

    size: '10"',
    price: '10.45',

  })
  // console.log("cart items", cartItems);


  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [count, setCount] = useState(1);
  // const header= props.header;
  const size = props.size;
  const price = props.price;
  const ingre = props.menu;
  const title = props.title;

  // console.log(header);
  function increment() {
    setCount(count + 1)
  };
  function decrement() {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  function getItem(item) {
    setCartItems(item)
  }

  function handleClick(e) {
    e.preventDefault();
    setModalShow(true);
    // props.addToCard()
  }


  return <div className="pizza-cont">
    <Row>
      <Col md={3}>
        <Card className="indv-card-pizza">
          <Card.Img className="topCardImg" variant="top" style={{ width: '100%' }} src={props.img} />
          <Card.Body>
            <Card.Title className="pz-card-title">{title}</Card.Title>

            <Row>
              <Col md={4}>
                <Button id="add-btn" className="add-btn" data-tip="Add" onClick={handleClick}><MdAddShoppingCart /><ReactToolTip /></Button>
              </Col>
              <Col md={3}>
                {
                  ingre.length > 0 &&
                  <Button className="edit-btn" data-tip="Edit" onClick={() => setModalShow1(true)}><FiEdit3 /><ReactToolTip /></Button>
                }
              </Col>
              <Col md={5}>
                <Button className="add-btn" onClick={increment}><TiPlusOutline /></Button>
                <Button id="dec-btn" className="add-btn" onClick={decrement}><TiMinusOutline /> {count} </Button>
              </Col>
              <Col md={12}>
                {
                  size.length > 0 && price.length === 4
                  && <Options

                    count={count}
                    price={price}
                    title={title}
                    size={size}
                    getItem={getItem}



                  />
                }
                {
                  size.length > 0 && price.length === 2
                  && <DrinkOptions
                    count={count}
                    price={price}
                  />
                }
              </Col>
            </Row>

          </Card.Body>
        </Card>
        <EditOrder
          show={modalShow1}
          onHide={() => setModalShow1(false)}
          header={props.header}
          ingredients={props.menu}
        />
        <AddCart
          count={count}
          title={title}
          size={cartItems.size}
          price={cartItems.price}
          show={modalShow}
          onHide={() => setModalShow(false)}

        />
      </Col>
    </Row>
  </div>
}


// function mapDispatchToProps(dispatch, ownProps) {
//   // console.log("ownProps:", ownProps);
//   return {
//     addToCard: () => {
//       dispatch({
//         type: "ADD_ITEM", items: {
//           name: ownProps.menu,
//           size: ownProps.size,
//           price: ownProps.price,
//           count: ownProps.count
//         }
//       })
//     }
//   }
// }


// export default connect(null, mapDispatchToProps)(PizzaCards);


export default PizzaCards;
import React ,{useState} from "react";
import {Card, Col, Row, Button} from "react-bootstrap";
import {FiEdit3} from "react-icons/fi";
import {MdAddShoppingCart} from "react-icons/md";
import {TiPlusOutline} from "react-icons/ti";
import {TiMinusOutline} from "react-icons/ti";
import ReactToolTip from "react-tooltip";
import EditOrder from "../Modals/EditOrder";
import AddCart from "../Modals/AddCart";

function PastaCards(props) {

  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [count, setCount] = useState(1);
  
  const price= props.price;
  const ingre= props.menu;
  const sum = (count * price[0]).toFixed(2);
  function increment(){
    setCount(count + 1)
  };
  function decrement(){
    if(count > 1){
      setCount(count - 1);
    }
  };
    return <div className="pizza-cont">
        <Row>        
            <Col md={3}>
       <Card className="indv-card-pizza">
         <Card.Img className="topCardImg" variant="top" style= {{width:'100%'}} src={props.img} />
         <Card.Body>
           <Card.Title className="pz-card-title">{props.title}</Card.Title>
           
             <Row>
             <Col md={4}>
              <Button  id="add-btn" className="add-btn" data-tip="Add" onClick={() => setModalShow(true)}><MdAddShoppingCart/><ReactToolTip/></Button>
              </Col>
              <Col md={3}>
                {
                  ingre.length>0 &&
<Button className="edit-btn" data-tip="Edit" onClick={() => setModalShow1(true)}><FiEdit3/><ReactToolTip/></Button>
                }
              </Col>
              <Col md={5}>
              <Button className="add-btn" onClick={increment}><TiPlusOutline/></Button>
              <Button id="dec-btn" className="add-btn" onClick={decrement}><TiMinusOutline/> {count} </Button>
              </Col>
              <Col md={12}>
              <span className="price-tag" id="sum">$ {sum} </span>
              </Col>
             </Row> 
           
         </Card.Body>
       </Card>
<EditOrder
show={modalShow1}
onHide={() => setModalShow1(false)}
header={props.header}
/>
<AddCart
show={modalShow}
onHide={() => setModalShow(false)}
/>
       </Col>
       </Row> 
             </div>
}
export default PastaCards;
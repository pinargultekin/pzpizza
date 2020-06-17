import React ,{useState} from "react";
import {Card, Col, Row, Button} from "react-bootstrap";
import {FiEdit3} from "react-icons/fi";
import {MdAddShoppingCart} from "react-icons/md";
import ReactToolTip from "react-tooltip";
import EditOrder from "../Modals/EditOrder";
import AddCart from "../Modals/AddCart";
import Options from "../Form/Options";
import DrinkOptions from "../Form/DrinkOptions";
// import menu from "../../Menudata/menu";

function PizzaCards(props) {

  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const size= props.size;
  const price= props.price;

    return <div className="pizza-cont">
        <Row>        
            <Col md={3}>
       <Card className="indv-card-pizza">
         <Card.Img className="topCardImg" variant="top" style= {{width:'100%'}} src={props.img} />
         <Card.Body>
           <Card.Title className="pz-card-title">{props.title}</Card.Title>
           <Card.Text>
             <Row>
              <Col md={6}>
                <span className="price-tag">${props.price[0]}</span> 
              </Col>
              <Col md={6}>
                { 
                size.length>0 && price.length ===4 
                && <Options /> 
                }
                {
                  size.length>0 && price.length===2 
                  && <DrinkOptions /> 
                }
              </Col>
              <Col md={6}>
              <Button className="edit-btn" data-tip="Edit" onClick={() => setModalShow1(true)}><FiEdit3/><ReactToolTip/></Button>
              </Col>
              <Col md={6}>
              <Button className="add-btn" data-tip="Add" onClick={() => setModalShow(true)}><MdAddShoppingCart/><ReactToolTip/></Button>
              </Col>
             </Row> 
           </Card.Text>
         </Card.Body>
       </Card>
<EditOrder
show={modalShow1}
onHide={() => setModalShow1(false)}

/>
<AddCart
show={modalShow}
onHide={() => setModalShow(false)}
/>
       </Col>
       </Row> 
             </div>
}
export default PizzaCards;
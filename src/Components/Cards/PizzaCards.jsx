import React from "react";
import {Card, Col, Row, Button} from "react-bootstrap";
import {FiEdit3} from "react-icons/fi";
import {MdAddShoppingCart} from "react-icons/md";
import ReactToolTip from "react-tooltip";

function PizzaCards(props) {
    return <div className="pizza-cont">
        <Row>        
            <Col md={3}>
       <Card className="indv-card-pizza">
         <Card.Img className="topCardImg" variant="top" style= {{width:'100%'}} src={props.img} />
         <Card.Body>
           <Card.Title className="pz-card-title">{props.title}</Card.Title>
           <Card.Text>
               <div className="ingr-title">
             <b>Ingredients </b>
             <Button className="edit-btn" data-tip="Edit"><FiEdit3/><ReactToolTip/></Button>
             <Button className="add-btn" data-tip="Add"><MdAddShoppingCart/><ReactToolTip/></Button>
             </div>
            <div className="ingr-names">
                {props.menu}
            </div>
           </Card.Text>
         </Card.Body>
       </Card>
       </Col>
       </Row> 
             </div>
}
export default PizzaCards;
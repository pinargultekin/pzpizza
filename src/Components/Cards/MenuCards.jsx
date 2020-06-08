import React from "react";
import {Card, Button} from "react-bootstrap";

function MenuCards(props) {
    return <Card  className="indv-card">
    <Card.Img className="topCardImg menuCardImg" variant="top" src={props.img} />
    <Card.Body>
      <Button href={props.title} variant="outline-danger" size="lg" block>
      <Card.Title className="text-center btn-name">{props.title} <br></br>
      Order
      </Card.Title>
  </Button>
    </Card.Body>
  </Card>
}
export default MenuCards;
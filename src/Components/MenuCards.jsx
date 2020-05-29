import React from "react";
import {Card, CardGroup, Button} from "react-bootstrap";

function MenuCards(props) {
    return <Card  className="indv-card">
    <Card.Img className="topCardImg" variant="top" src={props.img} />
    <Card.Body>

      {/* <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text> */}
      <Button variant="outline-danger" size="lg" block>
      <Card.Title className="text-center">{props.title} <br></br>
      Order
      </Card.Title>
  </Button>
    </Card.Body>
  </Card>
}
export default MenuCards;
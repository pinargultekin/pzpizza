import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

var styles = {
  onlineOrderSavings: {
    textDecoration: 'underline'
  },
  totalSavings: {
    color: 'red',
    fontWeight: 800
  }
};

export default class onlineOrderSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSavings: 3.85
    };
  }

  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <p>
          Order online your order to cut costs!
        </p>
      </Tooltip>
    );
    return (
      <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div style={styles.onlineOrderSavings}>Online Order Savings</div>
          </OverlayTrigger>
        </Col>
        <Col style={styles.totalSavings} md={6}>{`$${this.props.price}`}</Col>
      </Row>
    );
  }
}

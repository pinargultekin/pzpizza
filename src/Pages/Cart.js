
import Navigation from "../Components/Navbar/Nav"
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import SubTotal from '../Components/Cart/SubTotal/SubTotal';
import onlineOrderSavings from '../Components/Cart/';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCodeDiscount from './components/PromoCode/PromoCode';
import "../App.css";

// Import redux provider
import { connect } from 'react-redux';
import { handleChange } from './Actions/promoCodeActions';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100.0,
      taxes: 0,
      onlineOrderSavings: -3.85,
      estimatedTotal: 0,
      disablePromoButton: false
    };
  }

  componentDidMount = () => {
    this.setState(
      { taxes: (this.state.total + this.state.onlineOrderSavings) * 0.0875 },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.onlineOrderSavings + this.state.taxes
        });
      }
    );
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === 'DISCOUNT') {
      this.setState(
        { estimatedTotal: this.state.estimatedTotal * 0.9 },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    }
  };

  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <Navigation />
          <SubTotal price={this.state.total.toFixed(2)} />
          <onlineOrderSavings price={this.state.onlineOrderSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
          <PromoCodeDiscount
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.disablePromoButton}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {
  handleChange
})(Cart);

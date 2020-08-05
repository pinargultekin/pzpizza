
import Navigation from "../Components/Navbar/Nav"
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import SubTotal from '../Components/Cart/Subtotal/Subtotal';
import OrderOnlineSaving from '../Components/Cart/OnlineOrderSaving/OnlineOrderSaving';
import TaxesFees from '../Components/Cart/TaxAndFees/TaxAndFees';
import EstimatedTotal from '../Components/Cart/EstimatedTotal/EstimatedTotal';
// import ItemDetails from './components/ItemDetails/ItemDetails';
// import PromoCodeDiscount from './components/PromoCode/PromoCode';
import '../Components/Cart/Cart.css'
// Import redux provider
import { connect } from 'react-redux';
// import { handleChange } from '../actions/promoCodeActions';
// import store from "../store"

class Cart extends Component {


  constructor(props) {
    super(props);

    this.state = {
      total: parseFloat(props.stateItem.cartItem.price),
      taxes: 0,
      onlineOrderSavings: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    };
  }


  componentDidMount = () => {
    this.setState(
      { taxes: (this.state.total + this.state.onlineOrderSavings) * 0.0875 },
      function () {
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
        function () {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    }
  };

  render() {
    console.log("cart props", this.props);
    return (
      <div className="main-cont">
        <Navigation />
        <Container className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <OrderOnlineSaving price={this.state.onlineOrderSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stateItem: state
  }
};

export default connect(mapStateToProps)(Cart);
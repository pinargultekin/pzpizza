import React, { Component } from "react";
import {Form, Col, Button} from "react-bootstrap";
import axios from 'axios';


class Register extends Component {

  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeZip = this.onChangeZip.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber:'',
      password:'',
      address:'',
      city:'',
      state:'',
      zip:''
    }
  }
   
  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    })
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    })
  }
    
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePhoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }
  
  onChangeCity(e) {
    this.setState({
      city: e.target.value
    })
  }

  onChangeState(e) {
    this.setState({
      state: e.target.value
    })
  }

  onChangeZip(e) {
    this.setState({
      zip: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      firstName: this.state.username,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    }
    
  }
    render(){

        
        return  <div className="register-cont">
            <h2 className="registerh2"><a href="/register">Register</a> <span style={{float:"right"}}><a href="/login">Log In</a></span></h2>
            <hr/>
            <br/>
            <Form >
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              name="firstName"
              placeholder="Rachel"
              value={this.state.firstName}
              onChange = {this.onChangeFirstName}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              name="lastName"
              placeholder="Green"
              value={this.state.lastName}
              onChange = {this.onChangeLastName}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="mail"
              name="email"
              placeholder="email@mail.com"
              value={this.state.email}
              onChange = {this.onChangeEmail}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              type="text"
              name="phoneNumber"
              placeholder="123 456 7890"
              value={this.state.phoneNumber}
              onChange = {this.onChangePhoneNumber}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
         
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="mail"
              name="phoneNumber"
              placeholder="Password"
              value={this.state.email}
              onChange = {this.onChangeEmail}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              type="text"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
         
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Address</Form.Label>
            <Form.Control 
            type="text" 
            name="address"
            placeholder="123 Main St. Apt. 1" 
            required
            value={this.state.address}
            onChange = {this.onChangeAddress} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid address.
            </Form.Control.Feedback>
          </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} md="5" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control 
            type="text" 
            name="city"
            placeholder="Boston" 
            required 
            value={this.state.city}
            onChange = {this.onChangeCity}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid address.
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group as={Col} md="5" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control 
            type="text" 
            name="state"
            placeholder="MA" 
            required
            value={this.state.state}
            onChange = {this.onChangeState}
               />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control 
            type="text" 
            name="zip"
            placeholder="02008" 
            required
            value={this.state.zip}
            onChange = {this.onChangeZip}
             />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button onSubmit= {this.onSubmit} href="/account" className= "register-btn btn-outline-danger" type="submit">Sign Up</Button>
      </Form>
      </div>
    };
}
export default Register;
import React, { Component } from "react";
import {Form, Col, Button} from "react-bootstrap";
class Register extends Component {
   
    
    render(){
        
        return  <div className="register-cont">
            <h2 className="registerh2"><a href="/register">Register</a> <span style={{float:"right"}}><a href="/login">Log In</a></span></h2>
            <hr/>
            <br/>
            <Form>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Rachel"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Green"
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
              placeholder="email@mail.com"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="123 456 7890"
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
              placeholder="Password"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Confirm Password"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
         
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="123 Main St. Apt. 1" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid address.
            </Form.Control.Feedback>
          </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} md="5" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Boston" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid address.
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group as={Col} md="5" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="MA" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="02008" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button className= "register-btn btn-outline-danger" type="submit">Sign Up</Button>
      </Form>
      </div>
    };
}
export default Register;
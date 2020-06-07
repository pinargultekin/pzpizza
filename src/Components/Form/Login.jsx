import React, { Component } from "react";
import {Form, Col, Button} from "react-bootstrap";
class Login extends Component {
    render(){
        
        return <div className="Login-cont">
            <h2 className="registerh2"><a href="/register">Register</a> <span style={{float:"right"}}><a href="/login">Log In</a></span></h2>
            <hr/>
            <br/>
            <Form>
        <Form.Row className="log-form">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="mail"
              placeholder="email@mail.com"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          </Form.Row>
          <Form.Row className="log-form">
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Password"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button href="/account" className= "login-btn btn-outline-danger" type="submit">Sign In</Button>
      </Form>
      </div>
    };
}
export default Login;
import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
// import { login } from "./UserFunctions"
import axios from "axios"
import { withRouter } from 'react-router'






// class
class Login extends Component {


  constructor() {
    super()
    this.state = {
      email: '',
      password: '',

    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    var user = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(user);

    axios
      .post('http://localhost:5000/users/login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        localStorage.setItem('usertoken', response.data)
        console.log(response.data);
        this.props.history.push(`/account`)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })

  }


  render() {

    return <div className="Login-cont">
      <h2 className="registerh2"><a href="/register">Register</a> <span style={{ float: "right" }}><a href="/login">Log In</a></span></h2>
      <hr />
      <br />
      <Form onSubmit={this.onSubmit}>
        <Form.Row className="log-form">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="mail"
              placeholder="email@mail.com"
              name="email"
              onChange={
                this.onChange}
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
              name="password"
              onChange={
                this.onChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button className="login-btn btn-outline-danger" type="submit">Sign In</Button>
      </Form>
    </div>
  };
}
export default withRouter(Login);
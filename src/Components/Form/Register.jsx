import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { withRouter } from 'react-router'
import axios from "axios"


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {

        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        // const newUser = {
        //     firstName: this.state.firstName,
        //     lastName: this.state.lastName,
        //     email: this.state.email,
        //     phoneNumber: this.state.phoneNumber,
        //     password: this.state.password,
        //     address: this.state.address,
        //     city: this.state.city,
        //     state: this.state.state,
        //     zip: this.state.zip
        // }

        axios({
            method: "post",
            url: "http://localhost:5000/users/add",
            data: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phoneNumber: this.state.phoneNumber,
                password: this.state.password,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip
            },
            responseType: "json"
        }).then((res) => {
            console.log("res in register", res.data);
            this.props.history.push(`/login`)
        }, (error) => {
            console.log("Axios call back", error);
        });

    }

    render() {



        return <div className="register-cont">
            <h2 className="registerh2">
                <a href="/register">Register</a>
                <span style={
                    { float: "right" }
                }>
                    <a href="/login">Log In</a>
                </span>
            </h2>
            <hr />
            <br />
            <Form onSubmit={this.onSubmit}
            >
                <Form.Row>
                    <Form.Group as={Col}
                        md="6"
                        controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control required type="text" name="firstName" placeholder="Rachel"
                            value={
                                this.state.firstName
                            }
                            onChange={
                                this.onChange
                            } />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}
                        md="6"
                        controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control required type="text" name="lastName" placeholder="Green"
                            value={
                                this.state.lastName
                            }
                            onChange={
                                this.onChange
                            } />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}
                        md="6"
                        controlId="validationCustom01">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="text" name="email" placeholder="email@mail.com"
                            value={
                                this.state.email
                            }
                            onChange={
                                this.onChange
                            } />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}
                        md="6"
                        controlId="validationCustom02">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control required type="text" name="phoneNumber" placeholder="123 456 7890"
                            value={
                                this.state.phoneNumber
                            }
                            onChange={
                                this.onChange
                            } />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}
                        md="6"
                        controlId="validationCustom01">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="text" name="password" placeholder="Password"
                            value={
                                this.state.password
                            }
                            onChange={
                                this.onChange
                            } />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}
                        md="6"
                        controlId="validationCustom02">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control required type="text" name="confirmPassword" placeholder="Confirm Password" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}
                        md="12"
                        controlId="validationCustom03">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" placeholder="123 Main St. Apt. 1" required
                            value={
                                this.state.address
                            }
                            onChange={
                                this.onChange
                            } />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid address.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}
                        md="5"
                        controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name="city" placeholder="Boston" required
                            value={
                                this.state.city
                            }
                            onChange={
                                this.onChange
                            } />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid address.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col}
                        md="5"
                        controlId="validationCustom04">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" name="state" placeholder="MA" required
                            value={
                                this.state.state
                            }
                            onChange={
                                this.onChange
                            } />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}
                        md="2"
                        controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="text" name="zip" placeholder="02008" required
                            value={
                                this.state.zip
                            }
                            onChange={
                                this.onChange
                            } />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Button className="register-btn btn-outline-danger" type="submit">Sign Up</Button>
            </Form>
        </div>
    };
}
export default withRouter(Register);

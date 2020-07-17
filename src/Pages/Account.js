import React, { Component } from "react";
import Navigation from "../Components/Navbar/Nav";
import Footer from "../Components/Footer/Footer";
import jwt_decode from "jwt-decode"
import axios from "axios";






class Account extends Component {

    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            errors: {}
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        console.log("account token", token);
        const decoded = jwt_decode(token)
        // console.log(decoded.firstName);
        this.setState({
            firstName: decoded.firstName,
            lastName: decoded.lastName,
            email: decoded.email
        }, () => {
            return axios.get("http://localhost:5000/users/account", {
                params: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email
                }
            }).then(res => {
                console.log();
            })
                .catch(err => {
                    console.log(err.response);
                });
        });

    }


    render() {
        return <div className="main-cont">
            <Navigation />
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.firstName}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.lastName}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    }
}
export default Account;
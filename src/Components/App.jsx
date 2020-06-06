import React, { Component } from "react";
import { BrowserRouter as  Router, Route } from "react-router-dom";
import Landing from "../Pages/Landing";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import FullMenu from "../Pages/FullMenu";
import Cart from "../Pages/Cart";

class App extends Component {
    render = () => (
        
        <Router>
            <div className="App">
                <Route exact path="/" component={Landing}/>
                <Route exact path="/menu" component={FullMenu}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/register" component={SignUp}/>
                <Route exact path="/login" component={SignIn}/>
            </div>
        </Router>
       
    );
}
export default App;
import React, { Component } from "react";
import { BrowserRouter as  Router, Route } from "react-router-dom";
import Landing from "../Pages/Landing";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import FullMenu from "../Pages/FullMenu";
import Cart from "../Pages/Cart";
import Account from "../Pages/Account";
import Pizza from "../Components/Menu/Pizza";
import Pasta from "../Components/Menu/Pasta";

class App extends Component {
    render = () => (
        
        <Router>
            <div className="App">
                <Route exact path="/" component={Landing}/>
                <Route exact path="/menu" component={FullMenu}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/register" component={SignUp}/>
                <Route exact path="/login" component={SignIn}/>
                <Route exact path="/account" component={Account} />
                <Route exact path="/pizza" component={Pizza} />
                <Route exact path="/Pasta" component={Pasta} />
            </div>
        </Router>
       
    );
}
export default App;
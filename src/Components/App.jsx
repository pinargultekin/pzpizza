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
import Salad from "../Components/Menu/Salad";
import Side from "../Components/Menu/Side";
import Dessert from "../Components/Menu/Dessert";
import Drink from "../Components/Menu/Drink";

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
                <Route exact path="/Pizza" component={Pizza} />
                <Route exact path="/Pasta" component={Pasta} />
                <Route exact path="/Salad" component={Salad} />
                <Route exact path="/Sides" component={Side} />
                <Route exact path="/Dessert" component={Dessert} />
                <Route exact path="/Drink" component={Drink} />
            </div>
        </Router>
       
    );
}
export default App;
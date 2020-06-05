import React, { Component } from "react";
import { BrowserRouter as  Router, Route } from "react-router-dom";
import Landing from "../Pages/Landing";
import { Provider } from "react-redux";
import SignIn from "../Pages/SignIn"
// import Navigation from "./Navbar/Nav";
// import HeaderPhoto from "./Promophotos/HeaderPhoto";
// import Menu from "./Menu/Menu";
// import menu from "../Menudata/menu";
// import {Col} from "react-bootstrap"

// function App (){
//     return <Landing />
// //     return <div className="main-cont">
// //     <Navigation />
// //     <HeaderPhoto/>
// //     <h2 className="menuh2">MENU</h2>
// //     <Col xs={9} className="categoryCard">      
// //     {menu.map(menu => (
// //         <Menu 
// // key = {menu.id}
// // title = {menu.itemName}
// // img = {menu.itemImg}/>
// //     ))}
// //     </Col> 
// // </div>
// } 

class App extends Component {
    render = () => (
        
        <Router>
            <div className="App">
                <Route exact path="/" component={Landing}/>
                {/* <Route exact path="/menu" component={FullMenu}/> */}
                {/* <Route exact path="/cart" component={Cart}/> */}
                <Route exact path="/login" component={SignIn}/>
            </div>
        </Router>
       
    );
}
export default App;
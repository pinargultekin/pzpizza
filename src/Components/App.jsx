import React from "react";
import Navigation from "./Nav";
import HeaderPhoto from "./HeaderPhoto";
import Menu from "./Menu";
import menu from "../menu";
import {Card, CardGroup,Row, Col} from "react-bootstrap"
// import {pasta, salad, sides, dessert, drink} from "../menu";
// console.log(pizza.itemName)

function CreateCard (menu) {
    return <Menu 
    title = {menu.itemName}
    img = {menu.itemImg}/>
}
function App (){
    return <div className="main-cont">
        <Navigation />
        <HeaderPhoto/>
        <Col className="categoryCard">
        <h2 className="menuh2">MENU</h2>
        {menu.map(CreateCard)}
        </Col>
        {/* // title1={pizza[0].itemName}
        // img1={pizza[0].itemImg}
        // title2={pasta[0].itemName}
        // img2={pasta[0].itemImg}
        // title3={sides[0].itemName}
        // img3={sides[0].itemImg}
        // title4={dessert[0].itemName}
        // img4={dessert[0].itemImg}
        // title5={salad[0].itemName}
        // img5={salad[0].itemImg}
        // title6={drink[0].itemName}
        // img6={drink[0].itemImg} */}
        
    </div>
}
export default App;
import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {About} from "../../pages/About/About";
import {Contact} from "../../pages/Contact/Contact";
import {Items} from "../../pages/Items/Items";
import {ShoppingCart} from "../ShoppingCart/ShoppingCart";
import {ModifyCart} from "../ModifyCart/ModifyCart";

export class Main extends Component {
    render() {
        return (
            <div className="mx-auto">
                {/*<h1 className="text-4xl text-align text-primary">This is main Content</h1>*/}

                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/item" Component={Items}></Route>
                    <Route path="/shopping-cart" element={<ShoppingCart itemsList={ModifyCart.itemsList}/>}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                </Routes>
            </div>
        );
    }
}
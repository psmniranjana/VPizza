import React, {Component} from "react";
import {Navbar} from "../Navbar/Navbar";
import {Main} from "../MainContent/Main";
import {Products} from "../Products/Products";
import {Footer} from "../Footer/Footer";


export class DefaultLayout extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Main/>
                <Footer/>
            </>
        );
    }
}
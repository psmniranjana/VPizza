import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import logo from "../../../assets/pizzaLogo.png";
import "./Navbar.css"

export class Navbar extends Component {
    //@ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false,
            isMobileMenuOpen: false
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }

    componentDidMount() {
        // @ts-ignore
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        // @ts-ignore
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        // @ts-ignore
        const currentScrollPos = window.pageYOffset;
        const isScrolled = currentScrollPos > 50;
        this.setState({
            isScrolled
        });
    }

    toggleMobileMenu() {
        this.setState(prevState => ({
            //@ts-ignore
            isMobileMenuOpen: !prevState.isMobileMenuOpen
        }));
    }

    render() {
        //@ts-ignore
        const { isScrolled, isMobileMenuOpen } = this.state;

        return (
            <div className="fixed w-full p-5 bg-black flex justify-evenly h-20 z-10">

                <div className="flex">
                    <img className="h-12 ml-1" src={logo}
                         alt=""/>
                    <h1 className="text-2xl text-red-500 ml-2">
                        VITO</h1>

                </div>


                <div className={"flex"}>
                    <ul className="list-none mt-2 flex">
                        <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-red-500 font-bold">
                            <Link to="./">Home</Link>
                        </li>
                        <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-red-500 font-bold">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-red-500 font-bold">
                            <Link to="/item">Items</Link>
                        </li>
                        <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-red-600 font-bold">
                            <Link to="/shopping-cart">My-Cart</Link>
                        </li>
                        <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-red-500 font-bold">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col md:flex-row space-y-2.5 md:space-y-0 md:space-x-2.5">

                    <button
                        className="text-[20px] text-[#e6f0e6] bg-gray-400 pl-3 pr-3 mr-5 hover:text-gray-600 rounded-2xl">
                        <Link to="/login">Login In</Link></button>
                    {/*<button className="text-[20px]">*/}
                    {/*    <Link to="/signin">Sign In</Link>*/}
                    {/*</button>*/}
                </div>

                <div className="md:hidden flex items-center justify-end w-4/12">
                    <button className="text-[20px]" onClick={this.toggleMobileMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"/>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 6h16M4 12h16m-7 6h7"/>
                            )}
                        </svg>
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-16 right-0 bg-white text-black w-full">
                        <ul className="list-none mt-0 flex flex-col space-y-4 items-center">
                            <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-red-600 font-bold">
                                <Link to="/" className="hover:text-gray-600">Home</Link>
                            </li>
                            <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-red-600 font-bold">
                                <Link to="/about" className="hover:text-gray-600">About</Link>
                            </li>
                            <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-red-600 font-bold">
                                <Link to="/item" className="hover:text-gray-600">Item</Link>
                            </li>
                            <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-red-600 font-bold">
                                <Link to="/shopping-cart" className="hover:text-gray-600">Cart</Link>
                            </li>
                            <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-red-600 font-bold">
                                <Link to="/contact" className="hover:text-gray-600">Contact</Link>
                            </li>
                            <li className="mr-5 text-[18px] text-[#e6f0e6] hover:text-red-600 font-bold">
                                <Link to="/login" className="hover:text-gray-600">Log In</Link>
                            </li>
                            {/*<li className="text-[18px]">*/}
                            {/*    <Link to="/signin" className="hover:text-gray-600">Sign In</Link>*/}
                            {/*</li>*/}


                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

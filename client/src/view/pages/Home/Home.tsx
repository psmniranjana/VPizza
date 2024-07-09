import React, {Component} from "react";
import '../../../App.css';
import {Link} from "react-router-dom";
import '../../../App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Testimonials} from "./Testimonials";
// @ts-ignore
import pair from "../../../assets/pair-trainers.png";



export class Home extends Component {
    render() {

        return (

            <div className={"flex-row flex-wrap "}>
                <div className="flex flex-col justify-center items-center min-h-screen bg-cover bg-fixed relative"
                     style={{backgroundImage: 'url("/pizza.jpeg")'}}>

                    <div
                        className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"}>
                        <h1 className={"font-bold text-white text-4xl shadow-xl font-mono bg-gray-600 bg-opacity-40 md:rounded-lg p-6"}>
                            <span className={"text-white text-[64px]"} style={{textShadow: "2px 2px 0px #000"}}>R</span><span
                            className={"text-white font-bold"} style={{textShadow: "2px 2px 0px #000"}}>eady to savor the best pizza in town? </span>
                        </h1>
                        <div className="headerContainer flex flex-col items-center">
                            <h1 className="text-[90px] h-[60px] font-thin text-black">VITO's Pizza</h1>
                            {/*/!*<p className="p-0 text-[40px] font-light text-black">PIZZA TO FIT ANY TASTE</p>*!/*/}
                            {/*<Link to="/menu">*/}
                            {/*    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">ORDER NOW</button>*/}
                            {/*</Link>*/}
                        </div>


                    </div>


                    <div className={"absolute bottom-0 left-0 pb-8 pl-8"}>
                        <Link className={"text-white flex items-center"} to="/item">
                            <button className={"p-2 bg-black text-white animate-bounce"}>Buy Now <FontAwesomeIcon
                                icon={faShoppingCart} className="ml-2"/></button>
                        </Link>
                    </div>

                </div>


                <div className={"w-full md:pt-16 md:pb-16 md:pl-4 md:pr-4"}>
                    <h1 className={"p-2 md:ml-8 md:mr-14 text-xl md:text-2xl"}>
                        <span className={"text-[48px]"}>"I</span>ndulge
                       in the finest flavors at Vito's Pizza. From classic Margheritas to gourmet specialties, our menu offers a delicious array of pizzas to satisfy every craving.
                        Enjoy the freshest ingredients, hand-tossed dough, and a perfect blend of seasonings that make each bite a culinary delight. Whether you're dining in or ordering
                        out, Vito's Pizza ensures a memorable experience with every slice. Taste the tradition, embrace the quality, and let your pizza journey begin with us.."</h1>
                </div>

                <div className={"flex flex-row m-5"}>

                    <div className="flex-row w-4/12 h-80 bg-cover m-2 " style={{backgroundImage: 'url("/pepperoni.jpg")', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <h1 className="text-white text-center border-transparent border-2 border-solid transition duration-300 hover:border-white">Rs2990.00 ONLY <br/><span className={"text-black text-center text-3xl font-semibold"}>Classic Pizza</span></h1>
                    </div>

                    <div className="flex-row w-4/12 h-80 bg-cover m-2" style={{backgroundImage: 'url("/margherita.jpg")', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <h1 className="text-white text-center border-transparent border-2 border-solid transition duration-300 hover:border-white"> Today 50% off <br/><span className={"text-black text-center text-3xl font-bold"}>NEW ARRIVAL</span></h1>
                    </div>

                    <div className="flex-row w-4/12 h-80 bg-cover m-2" style={{backgroundImage: 'url("/melt2.jpeg")', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <h1 className="text-white text-center border-transparent border-2 border-solid transition duration-300 hover:border-white">Rs 890.00 ONLY <br/><span className={"text-black text-center text-3xl font-bold"}>PIZZA MELT</span></h1>
                    </div>


                </div>

                {/*<div className={"flex bg-cover h-auto bg-fixed bg-blend-color-burn"} style={{backgroundImage: 'url("/background.jpg")'}}>*/}
                {/*    <div className={"w-full flex p-6"}>*/}
                {/*        <div className={"flex w-6/12 m-2 justify-center border-b-4 border-r-2 border-white"}>*/}
                {/*            <img src={pair} alt="" className={"w-full h-auto "} style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', objectFit: 'cover' }}/>*/}
                {/*        </div>*/}
                {/*        <div className={"flex w-6/12 m-2"}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem cum doloribus eum hic ipsum maiores minus nemo nobis nostrum numquam obcaecati officia, optio, pariatur quia quidem soluta tempora temporibus!</div>*/}
                {/*    </div>*/}
                {/*</div>*/}


                <div>
                    <Testimonials/>
                </div>


            </div>


        );
    }
}

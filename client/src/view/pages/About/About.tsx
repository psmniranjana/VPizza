import React, {Component} from "react";
// @ts-ignore
import about from "../../../assets/multiplePizzas.jpeg";

export class About extends Component {
    render() {
        return (
            <div>
                {/*<div className={"flex flex-col justify-center items-center min-h-screen bg-cover bg-fixed relative"} style={{backgroundImage: 'url("/makingpizza.jpeg")'}}></div>*/}
                {/*<div className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"}>*/}
                {/*    <h1 className={"font-bold text-white text-6xl shadow-xl font-mono "}*/}
                {/*        style={{ textShadow: "2px 2px 0px #000" }}>About Us*/}
                {/*    </h1>*/}
                {/*</div>*/}


                <div className={"grid grid-cols-2 gap-5"}>
                    <div className={"mt-20 ml-5 mb-5 mr-5"}>
                        <p>
                            Welcome to Vito's Pizza, where every slice tells a story of tradition, flavor, and
                            passion. At  Vito's Pizza , we are dedicated to crafting the most delicious pizzas that
                            combine the finest ingredients with authentic techniques. Our love for pizza drives us to
                            create a diverse menu that caters to every palate, ensuring a delightful experience with
                            every bite.
                            <br/><br/>
                            Explore our carefully curated selection of pizzas, from classic Margheritas to gourmet
                            specialties. Each pizza is handcrafted with the utmost care, reflecting our commitment to
                            exceptional taste and quality. Our secret lies in the perfect balance of fresh,
                            locally-sourced ingredients and time-honored recipes that have been passed down through
                            generations.
                            <br/><br/>
                            What sets  Vito's Pizza apart is our dedication to providing an unforgettable dining
                            experience. Our team of culinary experts works tirelessly to ensure that every pizza is a
                            masterpiece, so you can savor the flavors and enjoy a moment of pure indulgence. Whether
                            you're dining in, taking out, or getting delivery, we promise to bring the essence of Italy
                            to your table.
                            <br/><br/>
                            Thank you for choosing Bella Pizzeria. We invite you to explore our menu, discover your
                            favorite pizza, and join us in celebrating the art of pizza-making. Your journey to the
                            perfect pizza starts here!
                        </p>
                    </div>

                    <div className={"mt-20 ml-5 mb-5 mr-5 relative"}>
                        <div className={"overflow-hidden rounded-md"}>
                            <img src={about} alt=""
                                 className={"w-full h-auto transition-transform duration-300 transform hover:scale-105"}
                                 style={{
                                     borderRadius: '8px',
                                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                     objectFit: 'cover'
                                 }}/>
                        </div>
                    </div>

                </div>


            </div>

        );
    }
}

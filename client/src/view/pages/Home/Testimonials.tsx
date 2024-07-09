import {Component} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
import Eddi from "../../../assets/Eddi Shan.jpg";
// @ts-ignore
import Jane from "../../../assets/Jane Foster.jpg";
// @ts-ignore
import Jon from "../../../assets/Jon Conwel.jpg";
// @ts-ignore
import Mike from "../../../assets/Mike Belish.jpg";
// @ts-ignore
import Sasha from "../../../assets/Sasha Kupar.jpg";

export class Testimonials extends Component {


    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        };
        return (
            <div className="testimonials-container bg-green-50">
                <h2 className={"text-2xl m-2 font-Smokum font-semibold"}>CUSTOMER REVIEWS</h2>
                <Slider {...settings}>

                    {/*1*/}
                    <div className="testimonial items-center">

                        <img className="commentor-photo  " src={Eddi} alt="Commentor 1"/>

                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec justo et nisl ultricies
                            viverra vel at dui. Nulla facilisi. Sed auctor risus quis eros suscipit, eget cursus magna
                            hendrerit."</p>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <p className="author">- Eddi Shan</p>
                    </div>

                    {/*2*/}
                    <div className="testimonial">
                        <img className="commentor-photo " src={Jane} alt="Commentor 1"/>

                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec justo et nisl ultricies
                            viverra vel at dui. Nulla facilisi. Sed auctor risus quis eros suscipit, eget cursus magna
                            hendrerit."</p>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <p className="author">- Jane Foster</p>
                    </div>

                    {/*    3*/}
                    <div className="testimonial">
                        <img className="commentor-photo " src={Jon} alt="Commentor 1"/>

                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec justo et nisl ultricies
                            viverra vel at dui. Nulla facilisi. Sed auctor risus quis eros suscipit, eget cursus magna
                            hendrerit."</p>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <p className="author">- Jon Conwel</p>
                    </div>

                    {/*    4*/}
                    <div className="testimonial">
                        <img className="commentor-photo " src={Mike} alt="Commentor 1"/>

                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec justo et nisl ultricies
                            viverra vel at dui. Nulla facilisi. Sed auctor risus quis eros suscipit, eget cursus magna
                            hendrerit."</p>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <p className="author">- Mike Belish</p>
                    </div>

                    {/*    5*/}
                    <div className="testimonial">
                        <img className="commentor-photo " src={Sasha} alt="Commentor 1"/>

                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec justo et nisl ultricies
                            viverra vel at dui. Nulla facilisi. Sed auctor risus quis eros suscipit, eget cursus magna
                            hendrerit."</p>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <p className="author">- Sasha Kupar</p>
                    </div>

                </Slider>
            </div>
        );
    }
}

export default Testimonials;
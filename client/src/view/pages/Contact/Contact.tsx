import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


interface ContactProps {
    data: any;
}

interface ContactState {
    email: string,
    subject: string,
    message: string
}

export class Contact extends Component<ContactProps, ContactState> {

    private api: any;


    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:5000`});
        this.state = {
            email: '',
            subject: '',
            message: ''
        }

        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }

    render() {
        // @ts-ignore
        return (
            <>

                <div className="flex flex-col justify-center items-center min-h-screen bg-cover bg-fixed relative"
                     style={{backgroundImage: 'url("/pizzaLeft.jpg")'}}>

                    <div className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"}>
                        <h1 className={"font-bold text-white text-6xl shadow-xl font-mono "}
                            style={{ textShadow: "2px 2px 0px #000" }}>Contact Us
                        </h1>
                    </div>

                </div>

                <div className="flex justify-center">
                    <div className="w-full md:w-2/3 lg:w-1/2 mt-8 p-6 bg-gray-100 rounded-lg">
                        <h2 className="text-3xl text-green-400 text-center font-semibold mb-4">Contact Form</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-lg text-gray-800 mb-1">Your Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full border border-green-200 rounded-md py-2 px-3 focus:outline-none focus:border-green-400"
                                    onChange={this.handleMessageInputOnChange}
                                    value={this.state.email}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-lg text-gray-800 mb-1">Your Subject:</label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="w-full border border-green-200 rounded-md py-2 px-3 focus:outline-none focus:border-green-400"
                                    onChange={this.handleMessageInputOnChange}
                                    value={this.state.subject}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-lg text-gray-800 mb-1">Your Message:</label>
                                <textarea
                                    name="message"
                                    className="w-full border border-green-200 rounded-md py-2 px-3 focus:outline-none focus:border-green-400"
                                    onChange={this.handleMessageInputOnChange}
                                    value={this.state.message}
                                />
                            </div>

                            <div className="text-center">
                                <button
                                    type="button"
                                    className="py-3 px-6 bg-green-400 text-white rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500"
                                    onClick={this.onSendButtonClick}
                                >
                                    Submit
                                </button>
                            </div>

                            <div className="flex justify-center mt-4 ">
                                <FontAwesomeIcon icon={faTwitter} className="text-3xl  mr-4 cursor-pointer hover:text-green-400" />
                                <FontAwesomeIcon icon={faFacebook} className="text-3xl mr-4 cursor-pointer hover:text-green-400" />
                                <FontAwesomeIcon icon={faInstagram} className="text-3xl  mr-4 cursor-pointer hover:text-green-400" />
                                <FontAwesomeIcon icon={faWhatsapp} className="text-3xl  mr-4 cursor-pointer hover:text-green-400" />
                            </div>

                        </form>



                    </div>
                </div>

            </>
        );
    }

    handleMessageInputOnChange(event: { target: { value: any; name: any; } })
    {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        // @ts-ignore
        this.setState({
            [name]: value
        });
    }

    private onSendButtonClick = () => {
        try {
            this.api.post('/contact/submit', {
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message
            }).then((res: { data: any }) => {
                const jsonData = res.data;
                // Clear the input fields after successful submission
                this.setState({
                    email: '',
                    subject: '',
                    message: ''
                });
                // Show alert or handle success message
                // @ts-ignore
                // alert(jsonData);
            }).catch((error: any) => {
                console.error('Axios Error', error);
            });
        } catch (error) {
            console.error("Error Submitting Data", error);
        }
    }


}
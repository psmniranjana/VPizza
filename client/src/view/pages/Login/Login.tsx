import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export class Login extends Component {
    state = {
        username: '',
        password: '',
        showPassword: false,
        error: ''
    };

    // @ts-ignore
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // @ts-ignore
    handleSubmit = (e) => {
        e.preventDefault();

        const { username, password } = this.state;

        // Admin credentials
        const ADMIN_USERNAME = 'admin';
        const ADMIN_PASSWORD = 'admin12';

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            // Redirect to admin page
            // @ts-ignore
            window.location.href = '/signin';
        } else {
            this.setState({ error: 'Invalid credentials', username: '', password: '' });
        }
    }

    toggleShowPassword = () => {

        this.setState(prevState => ({
            // @ts-ignore
            showPassword: !prevState.showPassword
        }));
    }

    render() {
        return (
            <div className="flex flex-wrap h-screen justify-center items-center bg-cover bg-center bg-no-repeat"
                 style={{ backgroundImage: 'url("/Shoe-Rack-Img.png")' }}>
                <div className="h-auto mt-4 mb-4 p-8 mx-auto border-white border rounded-2xl bg-gray-800 bg-opacity-50 w-full max-w-md">
                    <h2 className="pt-2 pb-2 text-3xl underline decoration-2 text-white mb-9 text-center">Log In</h2>
                    {this.state.error && <p className="text-red-500 text-center">{this.state.error}</p>}
                    <form onSubmit={this.handleSubmit} className="space-y-6 font-serif">
                        <div>
                            <label className="block text-sm font-bold text-white mb-1">User Name:</label>
                            <input
                                name="username"
                                className="w-full p-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                type="text"
                                required
                                value={this.state.username}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-white mb-1">Password:</label>
                            <div className="relative">
                                <input
                                    name="password"
                                    className="w-full p-2 border border-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                    type={this.state.showPassword ? "text" : "password"}
                                    required
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                />
                                <button
                                    type="button"
                                    className="absolute right-2 top-2 text-gray-400"
                                    onClick={this.toggleShowPassword}
                                >
                                    <FontAwesomeIcon icon={this.state.showPassword ? faEyeSlash : faEye} />
                                </button>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full  text-[15px] p-[10px] rounded-3xl hover:bg-green-500 text-white font-bold">
                                Log In
                            </button>
                        </div>
                        <div className="pt-3 text-center">
                            <Link className="text-white flex items-center justify-center" to="/">
                                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                                Back to Home
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


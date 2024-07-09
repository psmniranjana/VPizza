import React, { Component, ChangeEvent, MouseEvent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

type Item = {
    id: number;
    name: string;
    price: number;
    currency: string;
    description: string;
    image: string | null;
};

type State = {
    showModal: boolean;
    showDropdown: boolean;
    items: Item[];
    newItem: Item;
};

export class Admin extends Component<{}, State> {
    state: State = {
        showModal: false,
        showDropdown: false,
        items: [],
        newItem: {
            id: 0,
            name: '',
            price: 0,
            currency: '',
            description: '',
            image: null
        }
    };

    api = axios.create({ baseURL: `http://localhost:5000` });

    componentDidMount() {
        this.fetchData().then(r => console.log("Data fetch completed"));
    }

    fetchData = async () => {
        try {
            const res = await this.api.get('products/all');
            const jsonData = res.data;
            this.setState({ items: jsonData });
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }

    handleShow = () => this.setState({ showModal: true });
    handleClose = () => this.setState({ showModal: false });

    handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        this.setState({
            newItem: {
                ...this.state.newItem,
                [name]: name === "price" ? Number(value) : value
            }
        });
    };

    handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            newItem: {
                ...this.state.newItem,
                image: e.target.files ? URL.createObjectURL(e.target.files[0]) : null
            }
        });
    };

    handleAddItem = () => {
        const { items, newItem } = this.state;
        const updatedItems = [...items, newItem];
        this.setState({
            items: updatedItems,
            showModal: false,
            newItem: { id: 0, name: '', price: 0, currency: '', description: '', image: null }
        });
    };

    toggleDropdown = () => {
        this.setState(prevState => ({ showDropdown: !prevState.showDropdown }));
    };

    render() {
        const { showModal, showDropdown, items, newItem } = this.state;

        return (
            <div className="container mx-auto mt-5">
                <div className="border-b-4 flex justify-between items-center">
                    <div></div>
                    <div className="relative px-4">
                        <button className="text-gray-600" onClick={this.toggleDropdown}>
                            <FontAwesomeIcon icon={faUser} size="2x" />
                        </button>
                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                                <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    Profile
                                </button>
                                <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    Settings
                                </button>
                                <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                                    <a href="/">Log Out</a>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-5" onClick={this.handleShow}>
                    Add Item
                </button>

                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-2">
                            <div className="flex justify-between items-center p-5 border-b border-gray-200">
                                <h3 className="text-lg font-medium">Add Item</h3>
                                <button className="text-gray-500" onClick={this.handleClose}>&times;</button>
                            </div>
                            <div className="p-5">
                                <form>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">ID</label>
                                        <input className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                               type="number" name="id" value={newItem.id} onChange={this.handleChange} />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Name</label>
                                        <input className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                               type="text" name="name" value={newItem.name} onChange={this.handleChange} />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Price</label>
                                        <input className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                               type="number" name="price" value={newItem.price} onChange={this.handleChange} />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Currency</label>
                                        <input className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                               type="text" name="currency" value={newItem.currency} onChange={this.handleChange} />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Description</label>
                                        <textarea className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                                  name="description" value={newItem.description} onChange={this.handleChange} />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Image Uploader</label>
                                        <input className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                               type="file" name="image" onChange={this.handleFileChange} />
                                    </div>
                                </form>
                            </div>
                            <div className="flex justify-end p-5 border-t border-gray-200">
                                <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2" onClick={this.handleClose}>
                                    Close
                                </button>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={this.handleAddItem}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">
                                ID
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">
                                Price
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">
                                Currency
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">
                                Description
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">
                                Image
                            </th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map(({ id, name, price, currency, description, image }, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 border-b border-gray-200">{id}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{name}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{price}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{currency}</td>
                                <td className="px-6 py-4 border-b border-gray-200">{description}</td>
                                <td className="px-6 py-4 border-b border-gray-200">
                                    {image && <img src={image} alt={name} className="h-16 w-16 object-cover" />}
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200">
                                    <button className="text-blue-700 mr-2">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button className="text-red-500">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

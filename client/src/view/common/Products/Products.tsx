import React, {Component} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

interface ProductsProps {
    data: any
}
interface ProductState{
    isActive : boolean
}

export class Products extends Component<ProductsProps, ProductState> {


    constructor(props: ProductsProps) {
        super(props);
        this.state={
            isActive: false
        }
    }
    render() {

        const {data} = this.props;
        const image = require('../../../assets/products/'+data.image)

        return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-5">
                <img className="w-full h-56 object-cover" src={image} alt={data.name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{data.name}</div>
                    <p className="text-gray-700 text-base mb-2">{data.description}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-900 font-bold text-xl">{data.price} <span className="text-sm">{data.currency}</span></span>
                        <div > {this.state.isActive ?
                            <ModifyCart data={{product: data, isAdded: this.state.isActive}}/> :
                            <button
                            className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none`}
                            onClick={this.addToCartOnClick}
                        >
                            Add to Cart <FontAwesomeIcon icon={faShoppingCart} className="ml-2" />
                        </button>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private addToCartOnClick = () => {
        this.setState({isActive: !this.state.isActive},()=>{
            console.log(this.state.isActive);
            // @ts-ignore
            // alert(this.state.isActive)
        })
    }
}

import React, { Component } from "react";
import { CartItems } from "../../../model/CartItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

interface ModifyCartsProps {
    data: any;
}

interface ModifyCartState {
    itemCount: number;
}

export class ModifyCart extends Component<ModifyCartsProps, ModifyCartState> {
    public static itemsList: CartItems[] = [];

    constructor(props: ModifyCartsProps) {
        super(props);
        this.state = {
            itemCount: 1,
        };
    }

    componentDidMount() {
        const { itemCount } = this.state;

        if (this.props.data.isAdded) {
            if (!ModifyCart.itemsList.find(item => item.product.id === this.props.data.product.id)) {
                ModifyCart.itemsList.push({ product: this.props.data.product, itemCount: itemCount });
            }
        }

        console.log(ModifyCart.itemsList);
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartsProps>, prevState: Readonly<ModifyCartState>, snapshot?: any): void {
        const { itemCount } = this.state;

        const item = ModifyCart.itemsList.find(item => item.product.id === this.props.data.product.id);

        if (item) {
            const index = ModifyCart.itemsList.indexOf(item);
            ModifyCart.itemsList.splice(index, 1);
            ModifyCart.itemsList.push({ product: this.props.data.product, itemCount: itemCount });
        }

        console.log(ModifyCart.itemsList);
    }

    onDecreaseItemCount = () => {
        const { itemCount } = this.state;

        if (itemCount > 1) {
            this.setState({ itemCount: itemCount - 1 });
        } else {
            // @ts-ignore
            alert("Item Count Can't Be Less Than One");
        }
    };

    onIncreaseItemCount = () => {
        const { itemCount } = this.state;
        this.setState({ itemCount: itemCount + 1 });
    };

    render() {
        const { itemCount } = this.state;

        return (
            <div className="flex items-center">
                <button
                    className="bg-red-500 text-white rounded-l px-3 py-2 hover:bg-red-700 focus:outline-none"
                    onClick={this.onDecreaseItemCount}
                >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className="px-3 py-2 bg-red-600 text-white">{itemCount}</span>
                <button
                    className="bg-red-500 text-white rounded-r px-3 py-2 hover:bg-red-700 focus:outline-none"
                    onClick={this.onIncreaseItemCount}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>

        );
    }
}

import {Component} from "react";
import {CartItems} from "../../../model/CartItems";

interface ShoppingCartProps {
    itemsList: CartItems[];
}

interface ShoppingCartState {
    total: number;
    itemList: CartItems[];
}

export class ShoppingCart extends Component <ShoppingCartProps, ShoppingCartState> {

    constructor(props: ShoppingCartProps) {
        super(props);
        this.state = {
            total: this.calculateTotal(props.itemsList),
            itemList: props.itemsList,
        };
    }

    calculateTotal(itemList: CartItems[]) {
        return itemList.reduce((acc, item) => acc + item.product.price * item.itemCount, 0);
    }
    render() {
        return (
            <div className="flex-row flex-wrap min-h-screen bg-cover bg-center bg-custom-size"
                 style={{backgroundImage: 'url("/ezgif-7-00c01bc5f2.jpg")'}}>


        <div className="flex justify-center items-center w-full overflow-x-auto">
            <table className="w-full divide-y divide-gray-600 mt-20">
            <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">ID</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">Name</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">Price</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">Quantity</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">Total</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {this.props.itemsList.length === 0 ? (
                            <tr>
                                <td colSpan={5}
                                    className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500 text-center">
                                    No items to display
                                </td>
                            </tr>
                        ) : (
                            this.props.itemsList.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500">{item.product.id}</td>
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500">{item.product.name}</td>
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500">{item.product.price + " " + item.product.currency}</td>
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500">{item.itemCount}</td>
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500">{(item.product.price * item.itemCount) + " " + item.product.currency}</td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-center items-center ml-[900px] text-2xl text-red-500">
                    {/*Total Amount : {total} LKR*/}
                    Total Amount : {this.state.total} LKR
                    <button
                        className="ml-10 mt-3 mb-32 bg-white text-black w-56 h-16 pt-3 font-bold hover:bg-red-500 hover:text-white text-2xl rounded-lg"
                        onClick={this.clickOnProceed}>
                        Proceed Payment
                    </button>


                </div>

            </div>
        );
    }

    private clickOnProceed = () => {
        // @ts-ignore
        alert("Payment Confirmed by COD method!");

        // Reset the total to 0 after the payment is confirmed
        // this.setState({ total: 0,  itemList: []  });

       // @ts-ignore
        window.location.reload();
    }
}


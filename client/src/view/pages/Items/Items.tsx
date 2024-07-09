import {Component} from "react";
import {Products} from "../../common/Products/Products";

import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export class Items extends Component {

    private api : any;

    constructor(props: {}| Readonly<{}>) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:5000`})
        this.state={
            data:[],
        }
    }

    componentDidMount() {
        this.fetchData().then(r => console.log("Data fetch completed"));
    }

    fetchData = async () =>{
        try {

            this.api.get('products/all').then((res: {data: any}) => {
                const jsonData = res.data;
                this.setState({data:jsonData});
            }).catch((error: any) => {
                console.error("Axios Error: ", error)
            });


        }catch (error) {
            console.log("Error fetching Data")
        }
    }

    render() {

        // @ts-ignore
        const {data} = this.state;
        return (
            <div >
                <div className="flex flex-col justify-center items-center min-h-screen bg-cover bg-fixed relative"
                     style={{backgroundImage: 'url("/front.jpg")'}}>

                    <div className={"flex flex-wrap  items-center justify-center "}>

                        <h1 className={"text-4xl font-Ranger mt-20 text-white"}> <br/> <small className={"ml-14 text-white"}>Available Now</small></h1>

                    </div>

                </div>

            <div className={"flex"}>

                <div className={"mt-5 mb-5 flex flex-wrap justify-center items-center mx-auto"}>


                    {/*<Product/>*/}
                    {
                        data.map((product: any) =>(
                            <Products key={product.id} data={product}/>
                        ))

                    }

                </div>
            </div>
            </div>
        );
    }
}

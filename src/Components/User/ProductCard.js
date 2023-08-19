import React from 'react';
import "../../componentStyles/productcard.css";
import tempProduct from "../../Assets/Product.jpg";

function ProductCard(props) {
    return (
        <div>
            <table>
                <tr>
                    <td><img src={tempProduct} alt="Product"/></td>
                    <td>
                        <p>Product name</p>
                        <p>Description</p>
                        <p>Quantity</p>
                        <p>Price</p>
                    </td>
                    <br/>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                    <td >
                        <input 
                        placeholder="Quantity" 
                        type="number"
                        />
                        <div>
                            <button>
                                Add to Cart
                            </button>
                            <button>
                                View Product
                            </button>
                        </div>
                    </td>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default ProductCard;

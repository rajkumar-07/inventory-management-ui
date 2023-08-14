import React from 'react';
import "./componentStyles/productcard.css";
import tempProduct from "../Assets/Product.jpg";

function ProductCard(props) {
    // const {
    //     productName,
    //     productDesc,
    //     quantity,
    //     price
    // } =this.props;
    return (
        <div className="product-container-outer-layer">
            <table className="product-container">
                <tr>
                    <td className="product-image"><img src={tempProduct} alt="Product"/></td>
                    <td className="product-details">
                        <p className="product-name">Product name</p>
                        <p className="product-description">Description</p>
                        <p className="product-quantity">Quantity</p>
                        <p className="product-price">Price</p>
                    </td>
                    <br/>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                    <td >
                        <input 
                        className="quantity-input-field" 
                        placeholder="Quantity" 
                        type="number"
                        />
                        <div className="action-buttons">
                            <button 
                            className="action-button">
                                Add to Cart
                            </button>
                            <button className="action-button">
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

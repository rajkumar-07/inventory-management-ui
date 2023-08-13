import React from 'react';
import "./productcard.css";
import tempProduct from "../Assets/Product.jpg";

function ProductCard() {
    return (
        <div className="product-container-outer-layer">
            <table className="product-container">
                <tr>
                    <td className="product-image"><img src={tempProduct} alt="Product"/></td>
                    <td>
                        <p className="product-name">Product name</p>
                        <p className="product-description">Description</p>
                        <p>Quantity</p>
                        <p>Price</p>
                    </td>
                </tr>
                
                <tr>
                    <td colSpan="2">
                        <input className="input-field" placeholder="Quantity" />
                        <div className="action-buttons">
                            <button className="action-button">Add to Cart</button>
                            <button className="action-button">View Product</button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default ProductCard;

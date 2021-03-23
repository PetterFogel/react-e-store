import React from 'react'
import { CSSProperties } from '@material-ui/styles';
import { Product } from '../../../data/productData';
import "../../../style/Checkout.css";
import "../../../style/Admin.css";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

function AdminHandler() {

    const productData = JSON.parse(localStorage.getItem("ProductData") || "[]");
    
    const removeItemFromData = (product: Product) => {
        const cartIndex = productData.indexOf(product);
        productData.splice(cartIndex, 1)

        localStorage.setItem("ProductData", JSON.stringify(productData));
    }

    return (
        <div className="admin-handler-container">
                {productData.map((product: Product) => 
                    <div className="admin-item">
                        <img className="imageStyle" src={product.image}/>
                        <p className="admin-title">{product.title}</p>
                        <div className="info-admin-container">
                            <h4 className="admin-price">{`${product.price} SEK`}</h4>
                            <p className="admin-info">{product.info}</p>
                        </div>
                        <DeleteOutlinedIcon 
                            style={{ fontSize: "2rem", cursor: "pointer" }}
                            onClick={() => removeItemFromData(product)}
                        />
                       </div>
                )}
        </div>
    );
}

export default AdminHandler

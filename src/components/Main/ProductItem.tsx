import React, { Component } from "react";
import { Button } from '@material-ui/core'
import { btnMedium } from '../../style/GeneralStyle'
import { CartContext } from "../../contexts/CartContext";
import '../../style/productItem.css'
import { Product } from "../../data/productData";

interface Props {
  product: Product 
}

class ProductItem extends Component<Props> {
  
  context!: React.ContextType<typeof CartContext>
  static contextType = CartContext;
  
  render() {
    return (
      <div className="productitem-container">
        <div className="image-div">
          <img
            className="image-style"
            src={this.props.product.image}
            alt=""
          />
        </div>
        <div className="product-div">
          <h2>{this.props.product.title}</h2>
          <div className="product-info">
            <div style={{ margin: "2rem 0" }}>
              <h4>Price</h4>
              <p>{this.props.product.price + " " + "sek"}</p>
            </div>
            <div style={{ margin: "2rem 0" }}>
              <h4>Info</h4>
              <p>
                {this.props.product.info}
              </p>
            </div>
          </div>
          <Button 
            variant="contained" 
            style={btnMedium}
            onClick={() => this.context.addToCart(this.props.product)}
            >
              Add to cart
          </Button>
        </div>
      </div>
    );
  }
}


export default ProductItem;

import React, { Component, CSSProperties } from "react";
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


const rootStyle: CSSProperties = {
  display: "flex",
  width: "100%",
  height: "80%",
  background: "white",
  flexWrap: "wrap",
};

const imageDiv: CSSProperties = {
  width: "50%",
  height: "50rem",
};

const productDiv: CSSProperties = {
  padding: '3rem 0',
  flex: 1,
  background: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: 'space-between'
};

const imageStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
};

const productInfo: CSSProperties = {
  height: "50%",
  width: "40%",
};

export default ProductItem;

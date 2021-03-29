import React, { Component } from "react";
import { Button } from '@material-ui/core'
import { btnMedium } from '../../style/GeneralStyle'
import { inactiveBtn } from '../../style/GeneralStyle'
import { CartContext } from "../../contexts/CartContext";
import '../../style/productItem.css'
import { Product } from "../../data/productData";

interface Props {
  product: Product 
}

interface State {
  isSize: boolean
}

class ProductItem extends Component<Props, State> {
  
  state: State = {
    isSize: false
  }


  context!: React.ContextType<typeof CartContext>
  static contextType = CartContext;
  
  handleClick = (size: number) => {
    this.props.product.size = size
    this.setState({isSize: true})
  }

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
              <p>{this.props.product.price + " sek"}</p>
            </div>
            <div style={{ margin: "2rem 0" }}>
              <h4>Info</h4>
              <p>
                {this.props.product.info}
              </p>
            </div>
            <div className="sizes">
              <div className="size" onClick={() => this.handleClick(36)}><p>36</p></div>
              <div className="size" onClick={() => this.handleClick(37)}><p>37</p></div>
              <div className="size" onClick={() => this.handleClick(38)}><p>38</p></div>
              <div className="size" onClick={() => this.handleClick(39)}><p>39</p></div>
              <div className="size" onClick={() => this.handleClick(40)}><p>40</p></div>
              <div className="size" onClick={() => this.handleClick(41)}><p>41</p></div>
              <div className="size" onClick={() => this.handleClick(42)}><p>42</p></div>
              <div className="size" onClick={() => this.handleClick(43)}><p>43</p></div>
              <div className="size" onClick={() => this.handleClick(44)}><p>44</p></div>
            </div>
          </div>

          {this.state.isSize? 
          <Button 
            variant="contained" 
            style={btnMedium}
            onClick={() => this.context.addToCart(this.props.product)}
            >
              Add to cart
          </Button>
          :  
          <Button 
            variant="contained" 
            style={inactiveBtn}
            >
              Please choose size
          </Button>
          }
        </div>
      </div>
    );
  }
}

export default ProductItem;

import React, { Component, createContext } from "react";
import { isThisTypeNode } from "typescript";
import { Product, ProductData } from "../data/productData";


interface State {
  newPrice: string
  mode: string
  products: any
}

interface ContextProps extends State {
  // addToLocalStorage: () => void;
  addNewPrice: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  submitPrice: (product: Product) => void; 
  editMode: (mode: string) => void; 
  removeItem: (product: Product) => void; 
  startLS: () => void;
}

export const AdminContext = createContext<ContextProps>({
  newPrice: '',
  mode: '', 
  products: [],
  // addToLocalStorage: () => {}, 
  addNewPrice: () => {},
  submitPrice: () => {},
  editMode: () => {},
  removeItem: () => {},
  startLS: () => {}
});

class AdminProvider extends Component<{}, State> {
  state: State = { 
    newPrice: '',
    mode: '',
    products: JSON.parse(localStorage.getItem("ProductData") || "[]"),
  };

  removeItemFromData = (product: Product) => {
    const cartIndex = this.state.products.indexOf(product);
    this.state.products.splice(cartIndex, 1);
    this.setState({products: this.state.products})
  }

  addNewPriceToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({newPrice: event.target.value})
  }

  submitPriceToLS = (product: Product) => {
    const productIndex = this.state.products.indexOf(product)
    this.state.products[productIndex] = {
        title: product.title, 
        image: product.image, 
        info: product.info, 
        price: this.state.newPrice,
        quantity: product.quantity
    }
    
    this.setState({mode: '', products: this.state.products})
  }

  editModeState = (mode: string) => {
    this.setState({mode: mode})
  }

  setStarProductsToLS = () => {
    if (JSON.parse(localStorage.getItem("ProductData") || "[]").length === 0) {
      localStorage.setItem("ProductData", JSON.stringify(ProductData));
   }
   console.log('asdas')
  }

  componentDidUpdate() {
    localStorage.setItem("ProductData", JSON.stringify(this.state.products))
  }

  render() {
    return (
      <AdminContext.Provider
        value={{
          ...this.state,
          // addToLocalStorage: this.addProductsToLocalStorage,
          addNewPrice: this.addNewPriceToState,
          submitPrice: this.submitPriceToLS, 
          editMode: this.editModeState, 
          removeItem: this.removeItemFromData,
          startLS: this.setStarProductsToLS,
        }}
      >
        {this.props.children}
      </AdminContext.Provider>
    );
  }
}

export default AdminProvider;
import React, { Component, createContext } from "react";
import { Product, ProductData } from "../data/productData";


interface State {
  newPrice: string
  mode: string
  products: any
}

interface ContextProps extends State {
  // addToLocalStorage: () => void;
  addNewPrice: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  submitPrice: (product: Product, productData: any) => void; 
  editMode: (mode: string) => void; 
}

export const AdminContext = createContext<ContextProps>({
  newPrice: '',
  mode: '', 
  products: localStorage.setItem("ProductData", JSON.stringify(ProductData)),
  // addToLocalStorage: () => {}, 
  addNewPrice: () => {},
  submitPrice: () => {},
  editMode: () => {}
});

class AdminProvider extends Component<{}, State> {
  state: State = { 
    newPrice: '',
    mode: '',
    products: JSON.parse(localStorage.getItem("ProductData") || "[]"),
  };


  // addProductsToLocalStorage = () => {
  //   const ProductDataLS = JSON.parse(localStorage.getItem("ProductData") || "[]");

  //   if (JSON.parse(localStorage.getItem("ProductData") || "[]").length === 0) {
  //     localStorage.setItem("ProductData", JSON.stringify(ProductData));
  //     this.setState({})
  //   } 
  // }

  addNewPriceToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({newPrice: event.target.value})
  }

  submitPriceToLS = (product: Product, productData: any) => {
    const productIndex = productData.indexOf(product)
    productData[productIndex] = {
        title: product.title, 
        image: product.image, 
        info: product.info, 
        price: this.state.newPrice,
        quantity: product.quantity
    }
    localStorage.setItem("ProductData", JSON.stringify(productData));
    this.setState({mode: ''})
  }

  editModeState = (mode: string) => {
    this.setState({mode: mode})
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
          editMode: this.editModeState
        }}
      >
        {this.props.children}
      </AdminContext.Provider>
    );
  }
}

export default AdminProvider;
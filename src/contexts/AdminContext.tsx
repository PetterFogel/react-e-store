import React, { Component, createContext } from "react";
import { Product, ProductData } from "../data/productData";


interface State {
  newPrice: string
  newTitle: string
  newInfo: string
  newImage: string
  mode: string
  products: any
}

interface ContextProps extends State {
  // addToLocalStorage: () => void;
  addNewPrice: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  addNewTitle: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  addNewInfo: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  addNewImage: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  submitAll: (product: Product, currentProduct: any) => void; 
  addNewProduct: (newProductData: Product) => void; 
  removeItem: (product: Product) => void; 
}

export const AdminContext = createContext<ContextProps>({
  newPrice: '',
  newTitle: '', 
  newInfo: '', 
  newImage: '',
  mode: '', 
  products: [], 
  addNewPrice: () => {},
  addNewTitle: () => {},
  addNewInfo: () => {},
  addNewImage: () => {},
  submitAll: () => {},
  addNewProduct: () => {},
  removeItem: () => {}
});

class AdminProvider extends Component<{}, State> {
  state: State = { 
    newPrice: '',
    newTitle: '', 
    newInfo: '', 
    newImage: '',
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
  addNewTitleToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({newTitle: event.target.value})
  }
  addNewInfoToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({newInfo: event.target.value})
  }
  addNewImageToState = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({newImage: event.target.value})
  }

  submitEditInput = (editedProduct: Product, currentProduct: any) => {
    const productIndex = this.state.products.indexOf(currentProduct)
    this.state.products[productIndex] = editedProduct
    this.setState({mode: '', products: this.state.products})
  }

  addProductToState = (newProductData: Product) => {
    this.state.products.push(newProductData);
    localStorage.setItem("ProductData", JSON.stringify(this.state.products));
    this.setState({products: this.state.products})
  }


  componentDidMount() {
    if (JSON.parse(localStorage.getItem("ProductData") || "[]").length === 0) {
      localStorage.setItem("ProductData", JSON.stringify(ProductData));
   }
  }

  componentDidUpdate() {
    localStorage.setItem("ProductData", JSON.stringify(this.state.products))
  }

  render() {
    return (
      <AdminContext.Provider
        value={{
          ...this.state,
          addNewPrice: this.addNewPriceToState,
          addNewTitle: this.addNewTitleToState, 
          addNewImage: this.addNewImageToState, 
          addNewInfo: this.addNewInfoToState,
          submitAll: this.submitEditInput, 
          addNewProduct: this.addProductToState, 
          removeItem: this.removeItemFromData,
        }}
      >
        {this.props.children}
      </AdminContext.Provider>
    );
  }
}

export default AdminProvider;
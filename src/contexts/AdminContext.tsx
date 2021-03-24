import React, { Component, createContext } from "react";
import { isThisTypeNode } from "typescript";
import AdminPage from "../components/Main/Admin/AdminPage";
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
  submitAll: (product: Product) => void; 
  editMode: (mode: string) => void; 
  removeItem: (product: Product) => void; 
}

export const AdminContext = createContext<ContextProps>({
  newPrice: '',
  newTitle: '', 
  newInfo: '', 
  newImage: '',
  mode: '', 
  products: [],
  // addToLocalStorage: () => {}, 
  addNewPrice: () => {},
  addNewTitle: () => {},
  addNewInfo: () => {},
  addNewImage: () => {},
  submitAll: () => {},
  editMode: () => {},
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

  submitPriceToLS = (product: Product) => {
    const productIndex = this.state.products.indexOf(product)
    console.log(this.state.newTitle)

    // if(this.state.newTitle !== '') {
    //   this.state.products[productIndex] = {
    //     title: product.title
    //   }
    // }else {
    //   this.state.products[productIndex] = {
    //     title: this.state.newTitle
    //   }
    // }
    
    // if(this.state.newImage !== '') {
    //   this.state.products[productIndex] = {
    //     image: product.image
    //   }
    // }else {
    //   this.state.products[productIndex] = {
    //     image: this.state.newImage
    //   }
    // }

    // if(this.state.newInfo !== '') {
    //   this.state.products[productIndex] = {
    //     info: product.info
    //   }
    // }else {
    //   this.state.products[productIndex] = {
    //     info: this.state.newInfo
    //   }
    // }

    // if(this.state.newPrice !== '') {
    //   this.state.products[productIndex] = {
    //     price: product.price
    //   }
    // }else {
    //   this.state.products[productIndex] = {
    //     price: this.state.newPrice
    //   }
    // }
    this.state.products[productIndex] = {
        title: this.state.newTitle, 
        image: this.state.newImage, 
        info: this.state.newInfo, 
        price: this.state.newPrice,
        quantity: product.quantity
    }
    
    this.setState({mode: '', products: this.state.products})
  }

  editModeState = (mode: string) => {
    this.setState({mode: mode})
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
          // addToLocalStorage: this.addProductsToLocalStorage,
          addNewPrice: this.addNewPriceToState,
          addNewTitle: this.addNewTitleToState, 
          addNewImage: this.addNewImageToState, 
          addNewInfo: this.addNewInfoToState,
          submitAll: this.submitPriceToLS, 
          editMode: this.editModeState, 
          removeItem: this.removeItemFromData,
        }}
      >
        {this.props.children}
      </AdminContext.Provider>
    );
  }
}

export default AdminProvider;
import { Button, TextField } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'
import { ChangeEvent } from 'react'
import { btnSmall } from "../../style/GeneralStyle";
import '../../style/Admin.css';
import { Product } from '../../data/productData';


const AddNewProduct = () => {

    const newProductData: Product = {
      title: "",
      image: "",
      price: 0,
      info: "",
      quantity: 1

    };

    const handleClick = () => {
      const ProductData = JSON.parse(localStorage.getItem("ProductData") || "[]")
      ProductData.push(newProductData);
      localStorage.setItem("ProductData", JSON.stringify(ProductData));
    }

    const handleTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
      newProductData.title = e.target.value
    }

    const handleImage = (e: ChangeEvent<HTMLTextAreaElement>) => {
      newProductData.image = e.target.value
    }

    const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
      newProductData.price = parseInt(e.target.value)
    }

    const handleInfo = (e: ChangeEvent<HTMLTextAreaElement>) => {
      newProductData.info = e.target.value
    }

    return (
      <div>
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 style={title}>Add a new product</h1>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="title"
              label="Add Title..."
              name="title"
              type="text"
              autoFocus
              onChange={handleTitle}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="price"
              label="Add Image...(Url)"
              name="image"
              type="text"
              autoFocus
              onChange={handleImage}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="price"
              label="Add Price..."
              name="price"
              type="number"
              autoFocus
              onChange={handlePrice}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="info"
              type="text"
              label="Add Info..."
              name="info"
              autoFocus
              onChange={handleInfo}
            />
            <div style={{ alignSelf: "center" }}>
              <Button onClick={handleClick} style={btnSmall}>
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AddNewProduct

const title: CSSProperties = {
  textAlign: "center",
  margin: "0rem 1rem",
}


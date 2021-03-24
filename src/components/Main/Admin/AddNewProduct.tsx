import { Button, TextField } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'
import { ChangeEvent, useContext } from 'react'
import { btnSmall } from "../../../style/GeneralStyle";
import '../../../style/Admin.css';
import { Product } from '../../../data/productData';
import { AdminContext } from '../../../contexts/AdminContext';

interface Props {
  title: string, 
  btnText: string
  state: string
  currentProduct: Product
}

const AddNewProduct = (props: Props) => {

  const admin = useContext(AdminContext)

    const newProductData: Product = {
      title: "",
      image: "",
      price: 0,
      info: "",
      quantity: 1
    };

    const handleClick = () => {
      if(props.state === 'addNew'){
        admin.products = JSON.parse(localStorage.getItem("ProductData") || "[]")
        admin.products.push(newProductData);
        localStorage.setItem("ProductData", JSON.stringify(admin.products));
      } else {
        admin.submitAll(props.currentProduct)
      }
    }

    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
      if(props.state === 'addNew') {
        newProductData.title = e.target.value
      } else {
        admin.addNewTitle(e)
      }
    }

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
      if(props.state === 'addNew') {
        newProductData.image = e.target.value
      } else {
        admin.addNewImage(e)
      }
    }

    const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
      if(props.state === 'addNew') {
      newProductData.price = parseInt(e.target.value)
      } else {
        admin.addNewPrice(e)
      }
    }

    const handleInfo = (e: ChangeEvent<HTMLInputElement>) => {
      if(props.state === 'addNew') {
        newProductData.info = e.target.value
      } else {
        admin.addNewInfo(e)
      }
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
            <h1 style={title}>{props.title}</h1>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="title"
              label="Title..."
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
              label="Image...(Url)"
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
              label="Price..."
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
              label="Info..."
              name="info"
              autoFocus
              onChange={handleInfo}
            />
            <div style={{ alignSelf: "center" }}>
              <Button onClick={handleClick} style={btnSmall}>
                {props.btnText}
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


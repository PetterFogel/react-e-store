import { Button, TextField } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'
import React from 'react'
import { btnSmall } from "../../style/GeneralStyle";
import { Product } from "../../data/productData";
import '../../style/Admin.css';

interface Props{
    product: Product
}
const addNewProduct = (props: Props) => {

    // const [title, setTitle] = useState('');


    const handleClick = () => {
        console.log('added')
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

export default addNewProduct

const title: CSSProperties = {
  textAlign: "center",
  margin: "0rem 1rem",
}


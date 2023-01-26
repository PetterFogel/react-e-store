import { ChangeEvent, FC, useContext, useState } from "react";
import { Product } from "../../models/product";
import { btnSmall } from "../../style/GeneralStyle";
import { useParams } from "react-router";
import { AdminContext } from "../../contexts/AdminContext";
import { CSSProperties } from "@mui/styles";
import { Button, TextField } from "@mui/material";
import "./style/Admin.css";

export const AddNewProduct: FC = () => {
  const { id } = useParams();

  const newProductData: Product = {
    id: "",
    category: "",
    title: "",
    image: "",
    price: 0,
    info: "",
    size: 0,
    rating: 0,
    sizes: []
  };
  const admin = useContext(AdminContext);

  let currentProduct = admin.products.find(
    (specificProduct) => specificProduct.title === id
  );

  const [product, setProduct] = useState<Product>(
    currentProduct || newProductData
  );

  const handleClick = () => {
    const isNewProduct = !currentProduct;
    if (isNewProduct) {
      admin.addNewProduct(product);
    } else {
      admin.submitAll(product, currentProduct);
    }
  };

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, title: e.target.value });
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, image: e.target.value });
  };

  const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, price: parseInt(e.target.value) });
  };

  const handleInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, info: e.target.value });
  };
  return (
    <div>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
          {!currentProduct ? (
            <h1 style={title}>Add new product</h1>
          ) : (
            <h1 style={title}>Edit product</h1>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="title"
            label="Title..."
            name="title"
            type="text"
            autoFocus
            value={product.title}
            onChange={handleTitle}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="image"
            label="Image...(Url)"
            name="image"
            type="text"
            value={product.image}
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
            value={product.price}
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
            value={product.info}
            autoFocus
            onChange={handleInfo}
          />
          <div style={{ alignSelf: "center" }}>
            <Button onClick={handleClick} style={btnSmall}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const title: CSSProperties = {
  textAlign: "center",
  margin: "0rem 1rem"
};

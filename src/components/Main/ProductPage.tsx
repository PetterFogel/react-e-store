import { CSSProperties } from "@mui/styles";
import ItemList from "./ItemList";

const ProductPage = () => {
  return (
    <div>
      <h1 style={title}>Products</h1>
      <ItemList />
    </div>
  );
};

const title: CSSProperties = {
  textAlign: "center",
  margin: "0rem 1rem",
};

export default ProductPage;

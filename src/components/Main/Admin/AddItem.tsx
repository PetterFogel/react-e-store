import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { btnMedium } from "../../../style/GeneralStyle";

const AddItem = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
      <Link style={{ textDecoration: "none" }} to="/addNewProduct">
        <Button style={btnMedium}> Add a product</Button>
      </Link>
    </div>
  );
};

export default AddItem;

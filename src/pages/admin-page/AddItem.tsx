import { Button } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { btnMedium } from "../../style/GeneralStyle";

export const AddItem: FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
      <Link style={{ textDecoration: "none" }} to="/addNewProduct">
        <Button style={btnMedium}> Add a product</Button>
      </Link>
    </div>
  );
};

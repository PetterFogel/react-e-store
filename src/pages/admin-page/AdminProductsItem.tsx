import { FC } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../models/product";
import { routeFactory } from "../../route-factory/routeFactory";
import { TableCell, TableRow, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

interface Props {
  product: Product;
}

export const AdminProductsItem: FC<Props> = ({ product }) => {
  return (
    <TableRow>
      <TableCell style={{ width: "4rem", height: "4rem", padding: 8 }}>
        <img
          src={product.imageUrl}
          alt={product.imageUrl}
          style={{
            width: "100%",
            borderRadius: "100%"
          }}
        />
      </TableCell>
      <TableCell>{product.title}</TableCell>
      <TableCell>{product.price} SEK</TableCell>
      <TableCell>{product.info.slice(0, 60)}...</TableCell>
      <TableCell>{product.rating}</TableCell>
      <TableCell>
        <Tooltip title={"Edit"}>
          <Link to={routeFactory.adminScreen.editProduct(product.title)}>
            <EditIcon color="secondary" sx={{ cursor: "pointer" }} />
          </Link>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

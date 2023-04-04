import { FC } from "react";
import { Product } from "../../models/product";
import { useAppDispatch } from "../../redux/hooks";
import { fetchProductHandler } from "./redux/actions";
import { IconButton, TableCell, TableRow, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

interface Props {
  product: Product;
}

export const AdminProductsItem: FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

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
          <IconButton onClick={() => dispatch(fetchProductHandler(product.id))}>
            <EditIcon color="secondary" sx={{ cursor: "pointer" }} />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

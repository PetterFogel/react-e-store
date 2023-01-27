import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip
} from "@mui/material";
import { FC } from "react";
import { Product } from "../../models/product";
import { AdminProductsItem } from "./AdminProductsItem";

interface Props {
  products: Product[];
}

export const AdminProductsList: FC<Props> = ({ products }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Info</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <AdminProductsItem key={product.id} product={product} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

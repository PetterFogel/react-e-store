import { Button, Typography } from "@mui/material";
import { FC } from "react";

export const EmptyCartPanel: FC = () => {
  return (
    <>
      <Typography variant="h3" mb={2}>
        Your cart is empty
      </Typography>
      <Button color="info" variant="contained">
        Continue Shopping
      </Button>
    </>
  );
};

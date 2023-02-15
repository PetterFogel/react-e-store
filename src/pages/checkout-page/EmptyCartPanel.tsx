import { Button, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router";
import { routeFactory } from "../../common/constants/routeFactory";

export const EmptyCartPanel: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="h3" mb={2}>
        Your cart is empty
      </Typography>
      <Button
        color="info"
        variant="contained"
        onClick={() => navigate(routeFactory.productScreen.products())}>
        Continue Shopping
      </Button>
    </>
  );
};

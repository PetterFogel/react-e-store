import { FC } from "react";
import { loaderStyle } from "./style/loaderStyle";
import { Box, Typography } from "@mui/material";

export const Loader: FC = () => {
  const classes = loaderStyle();

  return (
    <Box className={classes.root}>
      <Typography variant={"h2"}>Loading...</Typography>
    </Box>
  );
};

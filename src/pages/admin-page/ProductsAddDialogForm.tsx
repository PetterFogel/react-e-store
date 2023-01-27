import { FC } from "react";
import {
  Box,
  Button,
  DialogContent,
  Grid,
  TextField,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { adminPageStyles } from "./style/adminPageStyles";

type DistrictAddDialogFormProps = {
  onDialogCloseClick: () => void;
};

export const ProductsAddDialogForm: FC<DistrictAddDialogFormProps> = ({
  onDialogCloseClick
}) => {
  const classes = adminPageStyles();
  const theme = useTheme();
  const isBreakpointSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <form>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              type="text"
              size="small"
              label="Title"
              margin="dense"
              autoComplete={"on"}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <Box className={classes.addDialogButtonHolder}>
        <Button
          variant={"outlined"}
          size="small"
          color="secondary"
          onClick={onDialogCloseClick}
          sx={{
            marginBottom: isBreakpointSm ? 1 : 0,
            width: isBreakpointSm ? "100%" : "10rem"
          }}>
          CANCEL
        </Button>
        <Button
          variant={"contained"}
          size="small"
          type="submit"
          sx={{
            marginLeft: isBreakpointSm ? 0 : 1,
            width: isBreakpointSm ? "100%" : "10rem"
          }}>
          SAVE
        </Button>
      </Box>
    </form>
  );
};

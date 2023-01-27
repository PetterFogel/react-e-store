import { FC, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  DialogContent,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { adminPageStyles } from "./style/adminPageStyles";
import { categories } from "../../common/constants/categories";
import { shoeSizes } from "../../common/constants/shoeSizes";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

interface Props {
  onDialogCloseClick: () => void;
}

export const ProductsAddDialogForm: FC<Props> = ({ onDialogCloseClick }) => {
  const classes = adminPageStyles();
  const theme = useTheme();
  const isBreakpointSm = useMediaQuery(theme.breakpoints.down("sm"));
  const [category, setCategory] = useState("");
  const [sizes, setSizes] = useState<string[]>([]);

  const categorySelectHandler = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const sizesSelectHandler = (event: SelectChangeEvent<typeof sizes>) => {
    const {
      target: { value }
    } = event;
    setSizes(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <form>
      <DialogContent>
        <Grid container spacing={1}>
          {/* Title STRING */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="text"
              size="small"
              label="Title"
              margin="dense"
              autoComplete={"on"}
            />
          </Grid>
          {/* Image STRING */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="url"
              size="small"
              label="Image url"
              margin="dense"
              autoComplete={"on"}
            />
          </Grid>
          {/* Category STRING */}
          <Grid item md={6} xs={12}>
            <FormControl fullWidth size={"small"} margin="dense">
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                label="Category"
                onChange={categorySelectHandler}>
                {categories.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {/* sizes STRING ARRAY */}
          <Grid item md={6} xs={12}>
            <FormControl fullWidth size={"small"} margin="dense">
              <InputLabel>Sizes</InputLabel>
              <Select
                multiple
                value={sizes}
                onChange={sizesSelectHandler}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}>
                {shoeSizes.map((size, index) => (
                  <MenuItem key={index} value={size}>
                    <Checkbox checked={sizes.indexOf(size) > -1} />
                    <ListItemText primary={size} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {/* Price NUMBER */}
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              type="number"
              size="small"
              label="Price"
              margin="dense"
              autoComplete={"on"}
              InputProps={{
                endAdornment: <InputAdornment position="end">KR</InputAdornment>
              }}
            />
          </Grid>
          {/* Price NUMBER */}
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              type="number"
              size="small"
              label="Rating"
              margin="dense"
              autoComplete={"on"}
            />
          </Grid>
          {/* Info STRING */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="text"
              size="small"
              label="Product Info"
              margin="dense"
              autoComplete={"on"}
              multiline
              rows={3}
            />
          </Grid>
          {/* rating NUMBER */}
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

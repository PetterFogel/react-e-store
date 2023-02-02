import { FC, useContext, useEffect } from "react";
import {
  Box,
  Button,
  DialogContent,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { adminPageStyles } from "./style/adminPageStyles";
import { categories } from "../../common/constants/categories";
import { shoeSizes } from "../../common/constants/shoeSizes";
import { useFormik } from "formik";
import { ProductItem } from "../../models/product";
import { FormikTextField } from "../../common/components/formik-text-field/FormikTextField";
import { AdminContext } from "../../contexts/AdminContext";
import { LoadingButton } from "@mui/lab";
import { useParams } from "react-router";

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

export const ProductsAddDialogForm: FC = () => {
  const classes = adminPageStyles();
  const theme = useTheme();
  const { id } = useParams();
  const isBreakpointSm = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    isModifiedProductLoading,
    addProductHandler,
    fetchSpecificProductHandler,
    product,
    setIsDialogOpen
  } = useContext(AdminContext);

  useEffect(() => {
    if (id) return fetchSpecificProductHandler(id);
  }, []);

  const closeDialogHandler = () => {
    setIsDialogOpen(false);
  };

  const validate = (values: ProductItem) => {
    const errors: Record<string, string> = {};
    if (!values.title) {
      errors.title = "Please enter title";
    }
    if (!values.imageUrl) {
      errors.imageUrl = "Please enter image url";
    }
    if (!values.category) {
      errors.category = "Please select category";
    }
    if (values.sizes.length === 0) {
      errors.sizes = "Please select sizes";
    }
    if (values.price <= 0) {
      errors.price = "Please enter price";
    }
    if (values.rating <= 0) {
      errors.rating = "Please enter rating";
    }
    if (!values.info) {
      errors.info = "Please enter product info";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: product ? product.title : "",
      imageUrl: product ? product.imageUrl : "",
      category: product ? product.category : "",
      info: product ? product.info : "",
      sizes: product ? product.sizes : [],
      size: product ? product.size : 0,
      price: product ? product.price : 0,
      rating: product ? product.rating : 0
    },
    validate,
    enableReinitialize: false,
    validateOnMount: true,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      addProductHandler(values);
      resetForm();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormikTextField
              id={"title"}
              type={"text"}
              label={"Title"}
              disabled={isModifiedProductLoading}
              helperText={formik.touched.title && formik.errors.title}
              error={formik.touched.title && Boolean(formik.errors.title)}
              formik={formik}
            />
          </Grid>
          <Grid item xs={12}>
            <FormikTextField
              id={"imageUrl"}
              type={"url"}
              label={"Image url"}
              disabled={isModifiedProductLoading}
              helperText={formik.touched.imageUrl && formik.errors.imageUrl}
              error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
              formik={formik}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl
              fullWidth
              size={"small"}
              margin="dense"
              error={
                formik.touched.category && Boolean(formik.errors.category)
              }>
              <InputLabel>Category</InputLabel>
              <Select
                id={"category"}
                label="Category"
                disabled={isModifiedProductLoading}
                {...formik.getFieldProps("category")}>
                {categories.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl
              fullWidth
              size={"small"}
              margin="dense"
              error={formik.touched.sizes && Boolean(formik.errors.sizes)}>
              <InputLabel>Sizes</InputLabel>
              <Select
                multiple
                id={"sizes"}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                disabled={isModifiedProductLoading}
                {...formik.getFieldProps("sizes")}>
                {shoeSizes.map((size, index) => (
                  <MenuItem key={index} value={size}>
                    <ListItemText primary={size} />
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.sizes && (
                <FormHelperText>{formik.errors.sizes}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <FormikTextField
              id="price"
              type="number"
              label="Price"
              adornmentSymbol="SEK"
              disabled={isModifiedProductLoading}
              helperText={formik.touched.price && formik.errors.price}
              error={formik.touched.price && Boolean(formik.errors.price)}
              formik={formik}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormikTextField
              id="rating"
              type="number"
              label="Rating"
              disabled={isModifiedProductLoading}
              helperText={formik.touched.rating && formik.errors.rating}
              error={formik.touched.rating && Boolean(formik.errors.rating)}
              formik={formik}
            />
          </Grid>
          <Grid item xs={12}>
            <FormikTextField
              id="info"
              type="number"
              label="Product description"
              multiline
              disabled={isModifiedProductLoading}
              helperText={formik.touched.info && formik.errors.info}
              error={formik.touched.info && Boolean(formik.errors.info)}
              formik={formik}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <Box className={classes.addDialogButtonHolder}>
        <Button
          variant={"outlined"}
          size="small"
          color="secondary"
          disabled={isModifiedProductLoading}
          onClick={closeDialogHandler}
          sx={{
            marginBottom: isBreakpointSm ? 1 : 0,
            width: isBreakpointSm ? "100%" : "10rem"
          }}>
          CANCEL
        </Button>
        <LoadingButton
          loading={isModifiedProductLoading}
          variant={"contained"}
          color="success"
          size="small"
          type="submit"
          sx={{
            marginLeft: isBreakpointSm ? 0 : 1,
            width: isBreakpointSm ? "100%" : "10rem"
          }}>
          SAVE
        </LoadingButton>
      </Box>
    </form>
  );
};

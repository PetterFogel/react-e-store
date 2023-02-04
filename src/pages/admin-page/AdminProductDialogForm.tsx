import { FC, useContext } from "react";
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
import { categories } from "../../common/constants/categories";
import { shoeSizes } from "../../common/constants/shoeSizes";
import { useFormik } from "formik";
import { ProductItem } from "../../models/product";
import { selectProps } from "../../common/constants/selectProps";
import { AdminContext } from "../../contexts/AdminContext";
import { LoadingButton } from "@mui/lab";
import { adminPageStyles } from "./style/adminPageStyles";
import { FormikTextField } from "../../common/components/formik-text-field/FormikTextField";
import { productValidateHandler } from "./helpers/productValidateHandler";
import { setInitialValuesHandler } from "./helpers/setInitialValuesHandler";

export const ProductsAddDialogForm: FC = () => {
  const classes = adminPageStyles();
  const theme = useTheme();
  const isBreakpointSm = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    isModifiedProductLoading,
    addProductHandler,
    product,
    setIsDialogOpen,
    updateProductHandler,
    deleteProductHandler
  } = useContext(AdminContext);

  const closeDialogHandler = () => {
    setIsDialogOpen(false);
  };

  const validate = (values: ProductItem) => productValidateHandler(values);

  const formik = useFormik({
    initialValues: setInitialValuesHandler(product),
    validate,
    enableReinitialize: false,
    validateOnMount: true,
    onSubmit: (values, { resetForm }) => {
      if (product.id) return updateProductHandler(product.id, values);
      addProductHandler(values);
      resetForm();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <DialogContent sx={{ p: isBreakpointSm ? 1 : 2 }}>
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
                MenuProps={selectProps}
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
      <Box
        className={
          product.id
            ? classes.editDialogButtonHolder
            : classes.addDialogButtonHolder
        }>
        {product.id && (
          <Button
            disabled={isModifiedProductLoading}
            className={classes.actionButton}
            variant={"text"}
            size={isBreakpointSm ? "small" : "medium"}
            color="error"
            onClick={() => deleteProductHandler(product.id)}>
            DELETE
          </Button>
        )}
        <Button
          disabled={isModifiedProductLoading}
          className={classes.actionButton}
          variant={"outlined"}
          size={isBreakpointSm ? "small" : "medium"}
          color="secondary"
          sx={{ marginLeft: "auto" }}
          onClick={closeDialogHandler}>
          CANCEL
        </Button>
        <LoadingButton
          loading={isModifiedProductLoading}
          className={classes.actionButton}
          variant={"contained"}
          color="success"
          size={isBreakpointSm ? "small" : "medium"}
          type="submit">
          SAVE
        </LoadingButton>
      </Box>
    </form>
  );
};

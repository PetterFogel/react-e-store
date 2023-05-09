import { FC, useEffect, useState } from "react";
import { Loader } from "../../common/components/loader/Loader";
import { ErrorPanel } from "../../common/components/error-panel/ErrorPanel";
import { ProductList } from "./ProductList";
import { productsSelector } from "./redux/productsSlice";
import { productPageStyles } from "./style/productPageStyles";
import { ProductFilterPanel } from "./ProductFilterPanel";
import { fetchProductsHandler } from "./redux/actions";
import { filterProductsByCategory } from "./helpers/filterProductsByCategory";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const ProductPage: FC = () => {
  const dispatch = useAppDispatch();
  const classes = productPageStyles();
  const [categoryValue, setCategoryValue] = useState("ALL");
  const { products, isProductsLoading, productsError } =
    useAppSelector(productsSelector);

  useEffect(() => {
    dispatch(fetchProductsHandler());
  }, []);

  const categoryFilterHandler = (category: string) =>
    setCategoryValue(category);

  const filteredData = filterProductsByCategory(products, categoryValue);

  if (productsError) return <ErrorPanel errorMsg={productsError} />;

  return (
    <div className={classes.root}>
      <ProductFilterPanel onCategoryFilterChange={categoryFilterHandler} />
      {isProductsLoading ? <Loader /> : <ProductList products={filteredData} />}
    </div>
  );
};

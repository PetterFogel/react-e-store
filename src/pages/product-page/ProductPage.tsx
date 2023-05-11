import { FC, useEffect, useState } from "react";
import { Loader } from "../../common/components/loader/Loader";
import { ErrorPanel } from "../../common/components/error-panel/ErrorPanel";
import { ProductList } from "./ProductList";
import { productsSelector } from "./redux/productsSlice";
import { productPageStyles } from "./style/productPageStyles";
import { ProductFilterPanel } from "./ProductFilterPanel";
import { sortProductsByPrice } from "./helpers/sortProductsByPrice";
import { fetchProductsHandler } from "./redux/actions";
import { filterProductsByCategory } from "./helpers/filterProductsByCategory";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const ProductPage: FC = () => {
  const dispatch = useAppDispatch();
  const classes = productPageStyles();
  const [categoryValue, setCategoryValue] = useState("ALL");
  const [value, setValue] = useState<string | null>(null);
  const { products, isProductsLoading, productsError } =
    useAppSelector(productsSelector);

  useEffect(() => {
    dispatch(fetchProductsHandler());
  }, []);

  const categoryFilterHandler = (category: string) =>
    setCategoryValue(category);

  const sortPriceHandler = (value: string | null) => setValue(value);

  const filteredData = filterProductsByCategory(products, categoryValue);
  const sortedProducts = sortProductsByPrice(filteredData, value);

  if (productsError) return <ErrorPanel errorMsg={productsError} />;

  return (
    <div className={classes.root}>
      <ProductFilterPanel
        onCategoryFilterChange={categoryFilterHandler}
        onPriceSortChange={sortPriceHandler}
      />
      {isProductsLoading ? (
        <Loader />
      ) : (
        <ProductList products={sortedProducts} />
      )}
    </div>
  );
};

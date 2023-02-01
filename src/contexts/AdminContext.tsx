import { createContext, FC, ReactElement, useState } from "react";
import { Product, ProductItem } from "../models/product";
import { productState } from "../common/constants/productState";
import axios, { AxiosError } from "axios";

interface ContextProps {
  products: Product[];
  isProductsLoading: boolean;
  productsError: string | null;
  fetchProductsHandler: () => void;
  product: Product;
  isProductLoading: boolean;
  productError: string | null;
  fetchSpecificProductHandler: (productId: string) => void;
  isModifiedProductLoading: boolean;
  addProductHandler: (product: ProductItem) => void;
}

export const AdminContext = createContext<ContextProps>({
  products: [],
  isProductsLoading: false,
  productsError: null,
  fetchProductsHandler: () => {},
  product: productState,
  isProductLoading: false,
  productError: null,
  fetchSpecificProductHandler: (productId: string) => {},
  isModifiedProductLoading: false,
  addProductHandler: (product: ProductItem) => {}
});

interface Props {
  children: ReactElement;
}

export const AdminProvider: FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [productsError, setProductsError] = useState<string | null>(null);

  const [product, setProduct] = useState<Product>(productState);
  const [isProductLoading, setIsProductLoading] = useState(false);
  const [productError, setProductError] = useState<string | null>(null);

  const [isModifiedProductLoading, setIsModifiedProductLoading] =
    useState(false);

  const fetchProductsHandler = async () => {
    try {
      setIsProductsLoading(true);
      setProductsError(null);

      const response = await axios(
        `${process.env.REACT_APP_API_BASEURL}/shoes`
      );

      setProducts(response.data);
      setIsProductsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        const errorMsg = error.message;
        setIsProductsLoading(false);
        setProductsError(errorMsg);
      }
    }
  };

  const fetchSpecificProductHandler = async (productId: string) => {
    try {
      setIsProductLoading(true);
      setProductError(null);

      const response = await axios(
        `${process.env.REACT_APP_API_BASEURL}/shoes/${productId}`
      );

      setProduct(response.data);
      setIsProductLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        setIsProductLoading(false);
        setProductError(error.message);
      }
    }
  };

  const addProductHandler = async (product: ProductItem) => {
    try {
      setIsModifiedProductLoading(true);

      const response = await axios(
        `${process.env.REACT_APP_API_BASEURL}/shoes`,
        {
          method: "POST",
          data: product
        }
      );

      console.log(response);

      setIsProductLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        setIsModifiedProductLoading(false);
      }
    }
  };

  const contextValue: ContextProps = {
    products,
    isProductsLoading,
    productsError,
    fetchProductsHandler,
    product,
    isProductLoading,
    productError,
    fetchSpecificProductHandler,
    isModifiedProductLoading,
    addProductHandler
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};

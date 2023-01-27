import { createContext, FC, ReactNode, useState } from "react";
import { Product } from "../models/product";
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
}

export const AdminContext = createContext<ContextProps>({
  products: [],
  isProductsLoading: false,
  productsError: null,
  product: productState,
  isProductLoading: false,
  productError: null,
  fetchProductsHandler: () => {},
  fetchSpecificProductHandler: () => {}
});

interface Props {
  children: ReactNode;
}

export const AdminProvider: FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [productsError, setProductsError] = useState<string | null>(null);

  const [product, setProduct] = useState<Product>(productState);
  const [isProductLoading, setIsProductLoading] = useState(false);
  const [productError, setProductError] = useState<string | null>(null);

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

  const contextValue: ContextProps = {
    products,
    isProductsLoading,
    productsError,
    fetchProductsHandler,
    product,
    isProductLoading,
    productError,
    fetchSpecificProductHandler
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};

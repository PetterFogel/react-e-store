import { createContext, FC, ReactNode, useState } from "react";
import { Product } from "../models/product";
import { productState } from "../common/constants/productState";

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

export const ProductsContext = createContext<ContextProps>({
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

export const PrdouctsProvider: FC<Props> = ({ children }) => {
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

      const response = await fetch(
        `${process.env.REACT_APP_API_BASEURL}/shoes`
      );

      const data = await response.json();

      setProducts(data);
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

      const response = await fetch(
        `${process.env.REACT_APP_API_BASEURL}/shoes/${productId}`
      );

      const data = await response.json();

      setProduct(data);
      setIsProductLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        const errorMsg = error.message;
        setIsProductLoading(false);
        setProductError(errorMsg);
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
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

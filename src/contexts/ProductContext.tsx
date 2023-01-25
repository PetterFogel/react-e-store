import { createContext, FC, ReactNode, useState } from "react";
import { Product } from "../models/Product";

interface ContextProps {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => void;
}

export const ProductsContext = createContext<ContextProps>({
  products: [],
  isLoading: false,
  error: null,
  fetchProducts: () => {},
});

interface Props {
  children: ReactNode;
}

export const PrdouctsProvider: FC<Props> = ({ children }) => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProductsHandler = async () => {
    try {
      setIsLoading(false);
      setError(null);

      const response = await fetch(
        `${process.env.REACT_APP_API_BASEURL}/shoes`
      );
      const data = await response.json();

      setData(data);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        const errorMsg = error.message;
        setIsLoading(false);
        setError(errorMsg);
      }
    }
  };

  const contextValue: ContextProps = {
    products: data,
    isLoading,
    error,
    fetchProducts: fetchProductsHandler,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

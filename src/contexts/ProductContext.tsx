import { createContext, FC, ReactNode, useState } from "react";
import { Product } from "../models/product";

interface ContextProps {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  fetchProductsHandler: () => void;
}

export const ProductsContext = createContext<ContextProps>({
  products: [],
  isLoading: false,
  error: null,
  fetchProductsHandler: () => {}
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
      setIsLoading(true);
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
    fetchProductsHandler
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

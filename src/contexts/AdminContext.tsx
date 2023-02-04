import axios, { AxiosError } from "axios";
import {
  createContext,
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  useState
} from "react";
import { toast } from "react-toastify";
import { productState } from "../common/constants/productState";
import { toastOptions } from "../common/constants/toastOptions";
import { Product, ProductItem } from "../models/product";

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
  isDialogOpen: boolean;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  setProduct: Dispatch<SetStateAction<Product>>;
  updateProductHandler: (id: string, product: ProductItem) => void;
  deleteProductHandler: (id: string) => void;
}

export const AdminContext = createContext<ContextProps>({
  products: [],
  isProductsLoading: false,
  productsError: null,
  fetchProductsHandler: () => {},
  product: productState,
  isProductLoading: false,
  productError: null,
  fetchSpecificProductHandler: () => {},
  isModifiedProductLoading: false,
  addProductHandler: () => {},
  isDialogOpen: false,
  setIsDialogOpen: () => {},
  setProduct: () => {},
  updateProductHandler: () => {},
  deleteProductHandler: () => {}
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

  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
      setIsDialogOpen(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        setIsProductLoading(false);
        setIsDialogOpen(false);
        toast.error(error.message, toastOptions);
      }
    }
  };

  const addProductHandler = async (product: ProductItem) => {
    try {
      setIsModifiedProductLoading(true);

      await axios(`${process.env.REACT_APP_API_BASEURL}/shoes`, {
        method: "POST",
        data: product
      });

      toast.success("The product has been created!", toastOptions);
      setIsModifiedProductLoading(false);
      fetchProductsHandler();
    } catch (error) {
      if (error instanceof AxiosError) {
        setIsModifiedProductLoading(false);
        toast.error(error.message, toastOptions);
      }
    }
  };

  const updateProductHandler = async (
    productId: string,
    product: ProductItem
  ) => {
    try {
      setIsModifiedProductLoading(true);

      await axios(`${process.env.REACT_APP_API_BASEURL}/shoes/${productId}`, {
        method: "PUT",
        data: product
      });

      toast.success("The product has been updated!", toastOptions);
      setIsModifiedProductLoading(false);
      fetchProductsHandler();
    } catch (error) {
      if (error instanceof AxiosError) {
        setIsModifiedProductLoading(false);
        toast.error(error.message, toastOptions);
      }
    }
  };

  const deleteProductHandler = async (productId: string) => {
    try {
      setIsModifiedProductLoading(true);

      await axios(`${process.env.REACT_APP_API_BASEURL}/shoes/${productId}`, {
        method: "DELETE"
      });

      toast.success("The product has been deleted!", toastOptions);
      setIsModifiedProductLoading(false);
      setIsDialogOpen(false);
      fetchProductsHandler();
    } catch (error) {
      if (error instanceof AxiosError) {
        setIsModifiedProductLoading(false);
        toast.error(error.message, toastOptions);
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
    addProductHandler,
    isDialogOpen,
    setIsDialogOpen,
    setProduct,
    updateProductHandler,
    deleteProductHandler
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};

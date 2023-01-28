export interface Product {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  info: string;
  sizes: string[];
  size: number;
  price: number;
  rating: number;
}

export interface ProductItem {
  title: string;
  imageUrl: string;
  category: string;
  info: string;
  sizes: string[];
  size: number;
  price: number;
  rating: number;
}

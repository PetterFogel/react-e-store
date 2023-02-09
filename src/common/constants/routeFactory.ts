export const routeFactory = {
  homeScreen: () => "/",
  productScreen: {
    products: () => "/products",
    productDetails: (productId: string) => `/product-details/${productId}`
  },
  checkoutScreen: () => "/checkout",
  aboutScreen: () => "/about",
  adminScreen: () => "/admin"
};

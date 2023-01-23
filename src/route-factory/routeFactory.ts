export const routeFactory = {
  homeScreen: () => "/",
  productScreen: {
    products: () => "/products",
    productDetails: (productId: string) => `/product-details/${productId}`,
  },
  checkoutScreen: {
    checkout: () => "/checkout",
    orderView: () => "/order-view",
  },
  aboutScreen: () => "/about",
  adminScreen: {
    admin: () => "/admin",
    addNewProduct: () => "/admin-add-new-product",
    editProduct: (productId: string) => `/admin-edit-product/${productId}`,
  },
};

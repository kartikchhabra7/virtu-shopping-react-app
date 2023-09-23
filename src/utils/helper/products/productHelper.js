export const filterProductByType = (products, type) => {
  return products.filter((product) => product.type === type);
};

export const priceIncrease = (products, value) => {
  return products.price * value;
};

export const productTitle = (products, valueStartFrom, valueEnd) => {
  return products.title.slice(valueStartFrom, valueEnd);
};

// export const getProductLength = (products, type) => {
//   const filteredProducts = filterProductByType(products,type);
//   return filteredProducts.length;
// };


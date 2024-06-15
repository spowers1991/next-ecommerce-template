const getProductUrl = (product) => {
    const url = `/products/${product.collections[0].node.handle}/${product.handle}`;
    return url;
  };
  
  export default getProductUrl;
  
const stripNodeProperty = (products) => {
    return products.map(({ node, ...rest }) => ({
      ...node,
      ...rest, // Spread any other properties from the product if needed
    }));
  };

  export default stripNodeProperty
const stripNodeProperty = (products) => {
  // Check if products is an array before mapping
  if (!Array.isArray(products)) {
    return [];
  }

  return products.map(({ node, ...rest }) => ({
    ...node,
    ...rest, // Spread any other properties from the product if needed
  }));
};

export default stripNodeProperty;

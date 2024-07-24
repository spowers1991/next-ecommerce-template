const stripNodeProperty = (arr) => {
  // Check if products is an array
  if (Array.isArray(arr)) {
    // If products is an array, map over each item and strip 'node' property
    return arr.map(({ node, ...rest }) => ({
      ...node,
      ...rest,
    }));
  } else {
    // If products is not an array, return an array containing the object
    return [arr];
  }
};

export default stripNodeProperty;

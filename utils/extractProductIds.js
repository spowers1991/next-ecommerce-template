export const extractProductIds = (product) => {
  return product.map(subItem => subItem.node.id);
}

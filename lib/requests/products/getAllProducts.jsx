import products from '@/data/product/productData.json';

export async function getAllProducts() {
  // Use the sample products array
  const allProducts = products || [];

  return allProducts;
}
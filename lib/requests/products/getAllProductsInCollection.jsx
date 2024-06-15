import products from '@/data/product/productsData.json';

export async function getAllProductsInCollection(collection) {
    let allProducts = products || [];
  
    try {
      // Attempt to fetch data from Shopify using callShopify function
      const query = `
        {
          collectionByHandle(handle: "${collection}") {
            id
            title
            products(first: 250) {
              edges {
                node {
                  id
                  title
                  description
                  handle
                  images(first: 250) {
                    edges {
                      node {
                        id
                        originalSrc
                        height
                        width
                        altText
                      }
                    }
                  }
                  variants(first: 250) {
                    edges {
                      node {
                        id
                        title
                        price
                      }
                    }
                  }
                }
              }
            }
          }
        }`;
      
      const response = await callShopify(query);
      const productsInCollection = response.data.collectionByHandle.products.edges || [];
      return productsInCollection;
    } catch (error) {
      // If callShopify request fails, use local productsData
      console.error("Failed to fetch products from Shopify. Using local data instead.");
      return allProducts;
    }
  }

  export default getAllProductsInCollection
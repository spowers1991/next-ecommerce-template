import React from 'react';
import ProductCard from '@/components/products/widgets/ProductCard';
import { ProductProvider } from '@/lib/contexts/product/ProductContext';

function ProductListing({ products }) {
  return (
    <div className="py-12 px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {products.map((product, index) => (
        <ProductProvider key={index} product={product.node}>
          <ProductCard />
        </ProductProvider>
      ))}
    </div>
  );
}

export default ProductListing;

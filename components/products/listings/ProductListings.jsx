import React from 'react';
import ProductCard from '@/components/products/widgets/ProductCard';
import { ProductProvider } from '@/lib/contexts/product/ProductContext';
import { FilterProvider } from '@/lib/contexts/filter/FilterContext';
import FilterWidget from '@/components/products/widgets/FilterWidget';
import stripNodeProperty from '@/utils/stripNodeProperty'

function ProductListing({ products }) {

  const sanitizedProducts = stripNodeProperty(products);

  return (
    <FilterProvider products={sanitizedProducts}>
      <div className='flex flex-col lg:flex-row px-4 mx-auto gap-4'>
        <div className='w-1/3'>
          <FilterWidget />
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {sanitizedProducts.map((product, index) => (
            <ProductProvider key={index} product={product}>
              <ProductCard />
            </ProductProvider>
          ))}
        </div>
      </div>
    </FilterProvider>
  );
}

export default ProductListing;

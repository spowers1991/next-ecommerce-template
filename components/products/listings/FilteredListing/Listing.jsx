import React from 'react';
import ProductCard from '@/components/products/widgets/ProductCard';
import { ProductProvider } from '@/lib/contexts/product/ProductContext';
import { useFilter } from '@/lib/contexts/filter/FilterContext';

function FilteredListing() {

  const { filteredProducts } = useFilter();

  return (
    filteredProducts.length > 0 ?
        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
            {filteredProducts.map((product, index) => (
                <ProductProvider key={index} product={product}>
                    <ProductCard />
                </ProductProvider>
            ))}
        </div>
    :
        <div className='text-center'>
                No results for this search   
        </div>
            
  );
}

export default FilteredListing;

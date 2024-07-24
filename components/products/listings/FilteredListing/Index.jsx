import React from 'react';
import { FilterProvider } from '@/lib/contexts/filter/FilterContext';
import Filters from '@/components/filter/Filters';
import stripNodeProperty from '@/utils/stripNodeProperty'
import Listing from './Listing';

function ProductListing({ products }) {

  const sanitizedProducts = stripNodeProperty(products);

  return (
    <FilterProvider products={sanitizedProducts}>
      <div className='w-full flex flex-col md:flex-row lg:flex-row px-4 mx-auto gap-4'>
        <div className='w-full md:w-1/4'>
          <Filters />
        </div>
        <div className='w-full md:w-3/4'>
          <Listing sanitizedProducts={sanitizedProducts} />
        </div>
      </div>
    </FilterProvider>
  );
}

export default ProductListing;

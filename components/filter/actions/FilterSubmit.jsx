import React from 'react';
import { useFilter } from '@/lib/contexts/filter/FilterContext';

const FilterSubmit = () => {
  const { clearFilter } = useFilter();

  return (
    <button onClick={clearFilter}>Clear Filters</button>
  );
};

export default FilterSubmit;

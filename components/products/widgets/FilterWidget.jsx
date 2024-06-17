import React from 'react';
import CheckboxSelector from '@/components/products/filter/selectors/CheckboxSelector';
import FilterSubmit from '../filter/actions/FilterSubmit';

const FilterWidget = () => {

  return (
    <div className="bg-white border p-4 flex flex-col gap-y-4 items-start">
      <CheckboxSelector propertyName={'collections'} />
    </div>
  );
};

export default FilterWidget;

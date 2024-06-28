import React from 'react';
import CheckboxSelector from '@/components/filter/selectors/CheckboxSelector';
import FilterSubmit from '@/components/filter/actions/FilterSubmit';

const FilterWidget = () => {

  return (
    <div className="bg-white border p-4 flex flex-col gap-y-4 items-start">
      <CheckboxSelector propertyName={'collections'} />
      <CheckboxSelector propertyName={'variants'} />
    </div>
  );
};

export default FilterWidget;

import React, { useState } from 'react';
import CheckboxSelector from '@/components/filter/selectors/CheckboxSelector';
import FilterSubmit from '@/components/filter/actions/FilterSubmit';

const FilterWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white border p-4 flex flex-col lg:gap-y-4 items-start fixed w-full bottom-0 lg:bottom-[unset] left-0 lg:left-[unset] lg:relative transition-all duration-300">
      <button
        onClick={toggleOpen}
        className="bg-blue-500 text-white px-4 py-2 lg:hidden ml-auto"
      >
        {isOpen ? 'Close Filters' : 'Open Filters'}
      </button>
      <div className={`overflow-hidden transition-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 lg:max-h-screen'}`}>
        <div className="flex flex-col gap-y-4 mt-5 lg:mt-0 ">
          <CheckboxSelector propertyName={'collections'} />
          <CheckboxSelector propertyName={'variants'} />
        </div>
      </div>
    </div>
  );
};

export default FilterWidget;

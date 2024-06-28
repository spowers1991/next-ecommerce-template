export const updateCheckboxOptions = (event, setSelectedOptions, propertyName) => {
    const selectedId = event.target.value;
    const isChecked = event.target.checked;

    setSelectedOptions(prevFilter => {
      let updatedSelection = prevFilter[propertyName] || [];
  
      if (isChecked) {
        updatedSelection = [...updatedSelection, selectedId];
      } else {
        updatedSelection = updatedSelection.filter(id => id !== selectedId);
      }
  
      return {
        ...prevFilter,
        [propertyName]: updatedSelection.length > 0 ? updatedSelection : null,
      };
    });
  };
  
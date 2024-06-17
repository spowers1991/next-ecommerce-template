export const updateFilterOptions = (name, properties, setFilterOptions) => {

  setFilterOptions(prevOptions => ({
    ...prevOptions,
    [name]: properties,
  }));
  
};

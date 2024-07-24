import removeTrailingSpacesFromArray from "@/utils/removeTrailingSpacesFromArray";

export const updateSearchBar = (searchTerm, setSelectedOptions, propertyName) => {
  searchTerm = [searchTerm]
  searchTerm = removeTrailingSpacesFromArray(searchTerm)
  
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [propertyName]: searchTerm,
    }));

};
  
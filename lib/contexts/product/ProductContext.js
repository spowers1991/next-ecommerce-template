import React, { createContext, useContext, useState } from 'react';
import getSelectedVariant from "@/lib/contexts/product/helpers/getSelectedVariant";

const ProductContext = createContext();

export const useProduct = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children, product }) => {
  
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedVariantId, setSelectedVariantId] = useState(null);
  
  const getProductVariant = (variantId) => {
    setSelectedVariant(getSelectedVariant(product, variantId))
  };

  return (
    <ProductContext.Provider value={{ 
        product, 
          selectedVariant, 
          selectedVariantId, 
          setSelectedVariantId, 
          getProductVariant 
    }}>
      {children}
    </ProductContext.Provider>
  );
};

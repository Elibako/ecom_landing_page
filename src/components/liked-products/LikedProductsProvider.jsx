import React, { createContext, useState } from 'react';

// Create a context
export const LikedProductsContext = createContext();

// Create a provider component
export const LikedProductsProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState(new Set());

  const toggleLike = (productId) => {
    setLikedProducts((prevLikedProducts) => {
      const newLikedProducts = new Set(prevLikedProducts);
      if (newLikedProducts.has(productId)) {
        newLikedProducts.delete(productId);
      } else {
        newLikedProducts.add(productId);
      }
      return newLikedProducts;
    });
  };

  return (
    <LikedProductsContext.Provider value={{ likedProducts, toggleLike }}>
      {children}
    </LikedProductsContext.Provider>
  );
};

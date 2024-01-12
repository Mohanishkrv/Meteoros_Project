// ProductPanel.js
import React from 'react';
import GetProduct from './Product/GetProduct';
import FetchTop10Products from './Product/FetchTop10Products';
import CreateNewProduct from './Product/CreateNewProduct';

const ProductPanel = () => {
  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Product Panel</h2>
      <GetProduct />
      <FetchTop10Products />
      <CreateNewProduct />
    </div>
  );
};

export default ProductPanel;

// CustomerPanel.js
import React, { useState } from 'react';
import GetCustomer from './Customer/GetCustomer';
import LastEnteredCustomer from './Customer/LastEnteredCustomer';

const CustomerPanel = () => {
  const [productId, setProductId] = useState('');

  return (
    <div className="container mt-4">
      <h2>Customer Panel</h2>

      <div className="form-group">
        <label htmlFor="productId">Enter Product ID:</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="productId"
            placeholder="Product ID"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </div>
      </div>

      <GetCustomer productId={productId} />

      <LastEnteredCustomer />
    </div>
  );
};

export default CustomerPanel;

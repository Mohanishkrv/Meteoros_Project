import React, { useState } from 'react';
import CustomerPanel from './Components/CustomerPanel';
import ProductPanel from './Components/ProductPanel';

const App = () => {
  const [showCustomerPanel, setShowCustomerPanel] = useState(false);
  const [showProductPanel, setShowProductPanel] = useState(false);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Customer Product</h1>
      <div className="mb-3">
        <button
          className={`btn btn-${showCustomerPanel ? 'danger' : 'success'} mr-3`}
          onClick={() => setShowCustomerPanel(!showCustomerPanel)}
        >
          {showCustomerPanel ? 'Hide Customer Panel' : 'Show Customer Panel'}
        </button>

        <button
          className={`btn btn-${showProductPanel ? 'danger' : 'success'}`}
          onClick={() => setShowProductPanel(!showProductPanel)}
        >
          {showProductPanel ? 'Hide Product Panel' : 'Show Product Panel'}
        </button>
      </div>

      {showCustomerPanel && <CustomerPanel />}
      {showProductPanel && <ProductPanel />}
    </div>
  );
};

export default App;
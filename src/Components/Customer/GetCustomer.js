// GetCustomer.js
import React, { useState, useEffect } from 'react';
import { getCustomersByProductApi } from '../API/CustomerAPIService';

const GetCustomer = ({ productId }) => {
  const [customersList, setCustomersList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCustomersWhoBoughtProduct = async () => {
    try {
      setLoading(true);
      const data = await getCustomersByProductApi(productId);
      setCustomersList(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching customers who bought the product:', error.message);
      setCustomersList([]);
      setError('Error fetching customers. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  }, [productId]); 

  return (
    <div>
      <div className="form-group">
        <button className="btn btn-primary mr-2" type="button" onClick={getCustomersWhoBoughtProduct}>
          Get Customers
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      {customersList.length > 0 ? (
        <div>
          <h3>Customers Who Bought the Product:</h3>
          <ul className="list-group">
            {customersList.map((customer) => (
              <li key={customer.id} className="list-group-item">
                <strong>Name:</strong> {customer.name}, <strong>Phone:</strong> {customer.phoneNumber}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        customersList.length === 0 && !loading && <p>No customers found for the specified product ID.</p>
      )}
    </div>
  );
};

export default GetCustomer;

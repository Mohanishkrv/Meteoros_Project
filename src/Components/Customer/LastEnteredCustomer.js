// LastEnteredCustomer.js
import React, { useState, useEffect } from 'react';
import { getLastEnteredCustomerApi } from '../API/CustomerAPIService';

const LastEnteredCustomer = () => {
  const [lastEnteredCustomer, setLastEnteredCustomer] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLastEnteredCustomer = async () => {
    try {
      setLoading(true);
      const data = await getLastEnteredCustomerApi();
      setLastEnteredCustomer(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching last entered customer:', error.message);
      setLastEnteredCustomer(null);
      setError('Error fetching last entered customer. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  }, []);

  return (
    <div>
      <div className="form-group">
        <button className="btn btn-success" type="button" onClick={getLastEnteredCustomer}>
          Last Entered Customer
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      {lastEnteredCustomer && (
        <div>
          <h3>Last Entered Customer:</h3>
          <p>
            <strong>Name:</strong> {lastEnteredCustomer.name}, <strong>Phone:</strong> {lastEnteredCustomer.phoneNumber}
          </p>
        </div>
      )}
    </div>
  );
};

export default LastEnteredCustomer;

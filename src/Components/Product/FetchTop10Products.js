// FetchTop10Products.js
import React, { useState } from 'react';
import { fetchTop10ProductsApi } from '../API/ProductAPIService';

const FetchTop10Products = () => {
  const [top10Products, setTop10Products] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTop10Products = async () => {
    try {
      setLoading(true);
      const data = await fetchTop10ProductsApi();
      setTop10Products(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching top 10 products:', error.message);
      setTop10Products(null);
      setError('Error fetching top 10 products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={fetchTop10Products}>
          Show Top 10 Products
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {error && (
        <div className="alert alert-danger">
          {error}{' '}
          <button className="btn btn-link" onClick={fetchTop10Products}>
            Retry
          </button>
        </div>
      )}

      {top10Products && (
        <div>
          <h3>Top 10 Products:</h3>
          <ul className="list-group">
            {top10Products.map((product) => (
              <li key={product.id} className="list-group-item">
                {product.name} - Total Sales: {parseInt(product.totalSales, 10)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FetchTop10Products;

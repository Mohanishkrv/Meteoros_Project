// GetProduct.js
import React, { useState, useEffect } from 'react';
import { fetchProductByIdApi } from '../API/ProductAPIService';

const GetProduct = () => {
  const [productId, setProductId] = useState('');
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [invalidImage, setInvalidImage] = useState(false);
  const [imageKey, setImageKey] = useState(0); // Added key for img tag

  const fetchProductById = async () => {
  try {
    setLoading(true);
    const data = await fetchProductByIdApi(productId);
    setProductData(data);
    setInvalidImage(false); // Reset invalid image state on successful fetch
    setError(null);
    // Increment the key to force re-render of the image
    setImageKey((prevKey) => prevKey + 1);
  } catch (error) {
    console.error('Error fetching product by ID:', error); // Log the specific error
    setProductData(null);
    setInvalidImage(false); // Reset invalid image state on fetch error
    setError('Error fetching product. Please try again.');
    // Increment the key to force re-render of the image
    setImageKey((prevKey) => prevKey + 1);
  } finally {
    setLoading(false);
  }
};

  const handleImageError = () => {
    setInvalidImage(true);
    // Increment the key to force re-render of the image
    setImageKey((prevKey) => prevKey + 1);
  };

  const renderProductImage = () => {
    if (productData && productData.pictureSrc) {
      const imageUrl = `${process.env.PUBLIC_URL}/Images/${productData.pictureSrc}`;
      console.log(imageUrl);
      return (
        <img
          key={imageKey} // Use key to force re-render on each change
          src={imageUrl}
          alt="Product"
          className="img-fluid"
          onError={handleImageError}
          style={{ height: '200px', width: '300px' }}
        />
      );
    } else {
      return <div style={{ backgroundColor: 'black', height: '200px', width: '200px' }} />;
    }
  };


  // Reset key when productId changes to ensure a fresh image load
  useEffect(() => {
    setImageKey(0);
  }, [productId]);

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="productId">Product ID:</label>
        <div className="input-group">
          <input
            type="text"
            id="productId"
            className="form-control"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={fetchProductById}>
              Get Product
            </button>
          </div>
        </div>
      </div>

      {loading && <p>Loading...</p>}

      {error && (
        <div className="alert alert-danger">
          {error}{' '}
          <button className="btn btn-link" onClick={fetchProductById}>
            Retry
          </button>
        </div>
      )}

      {productData ? (
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Product Details</h5>
            {invalidImage ? (
              <div style={{ backgroundColor: 'black', height: '200px', width: '200px' }} />
            ) : (
              renderProductImage()
            )}
            <p className="card-text">
              <strong>Name:</strong> {productData.name}
            </p>
            <p className="card-text">
              <strong>Description:</strong> {productData.description}
            </p>
            <p className="card-text">
              <strong>Price:</strong> ${parseFloat(productData.price).toFixed(2)}
            </p>
            <p className="card-text">
              <strong>Discount:</strong> {productData.discount}
            </p>
            <p className="card-text">
              <strong>Total Sales:</strong> {parseInt(productData.totalSales, 10)}
            </p>
          </div>
        </div>
      ) : (
        <p>No product data available.</p>
      )}
    </div>
  );
};

export default GetProduct;

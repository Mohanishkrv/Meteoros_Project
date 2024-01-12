// CreateNewProduct.js
import React, { useState } from 'react';
import { createNewProductApi } from '../API/ProductAPIService';

const CreateNewProduct = () => {
  const [newProductName, setNewProductName] = useState('');
  const [newProductDescription, setNewProductDescription] = useState('');
  const [newProductImage, setNewProductImage] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductDiscount, setNewProductDiscount] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const createNewProduct = async () => {
    try {
      setLoading(true);

      const formData = {
        name: newProductName,
        description: newProductDescription,
        pictureSrc: newProductImage,
        price: parseFloat(newProductPrice),
        discount: parseInt(newProductDiscount)
      };

      await createNewProductApi(formData);

      alert(`Product "${formData.name}" created successfully!`);
    } catch (error) {
      console.error('Error creating new product:', error.message);
      setError('Error creating new product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="newProductName">New Product Name:</label>
        <input
          type="text"
          id="newProductName"
          className="form-control"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="newProductDescription">New Product Description:</label>
        <input
          type="text"
          id="newProductDescription"
          className="form-control"
          value={newProductDescription}
          onChange={(e) => setNewProductDescription(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="newProductImage">New Product Image URL:</label>
        <input
          type="text"
          id="newProductImage"
          className="form-control"
          value={newProductImage}
          onChange={(e) => setNewProductImage(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="newProductPrice">New Product Price:</label>
        <input
          type="number"
          id="newProductPrice"
          className="form-control"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="newProductDiscount">New Product Discount:</label>
        <input
          type="number"
          id="newProductDiscount"
          className="form-control"
          value={newProductDiscount}
          onChange={(e) => setNewProductDiscount(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <button className="btn btn-success" type="button" onClick={createNewProduct}>
          Create New Product
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {error && (
        <div className="alert alert-danger">
          {error}{' '}
          <button className="btn btn-link" onClick={createNewProduct}>
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateNewProduct;

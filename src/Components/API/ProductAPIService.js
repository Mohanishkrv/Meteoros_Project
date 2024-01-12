// apiService.js
import axios from 'axios';

const API_BASE_URL = 'https://localhost:7244/api';

export const fetchProductByIdApi = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Product/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching product by ID. Please try again.');
  }
};

export const fetchTop10ProductsApi = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Product/top10`);
    return response.data.$values;
  } catch (error) {
    throw new Error('Error fetching top 10 products. Please try again.');
  }
};

export const createNewProductApi = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/Product`, formData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating new product. Please try again.');
  }
};

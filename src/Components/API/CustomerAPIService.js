// apiService.js
import axios from 'axios';

const API_BASE_URL = 'https://localhost:7244/api';

export const getCustomersByProductApi = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Customer/product/${productId}`);
    return response.data.$values;
  } catch (error) {
    throw new Error('Error fetching customers who bought the product. Please try again.');
  }
};

export const getLastEnteredCustomerApi = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/Customer/customer/lastEnteredCustomer`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching last entered customer. Please try again.');
  }
};

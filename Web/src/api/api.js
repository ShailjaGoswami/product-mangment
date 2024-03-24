import axios from 'axios';

const BASE_URL = 'https://localhost:44342/api';

// Function to handle errors from API calls
const handleErrors = (error) => {
  console.error('API error:', error);
  throw error;
};

// Function to make a GET request
export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/Product/allProduct`);
    return response.data;
  } catch (error) {
    handleErrors(error);
  }
};

// Function to make a POST request to add a product
export const addProduct = async (productData) => {
  try {
    const response = await axios.post(`${BASE_URL}/Product/insertProduct`, productData);
    return response.data;
  } catch (error) {
    handleErrors(error);
  }
};

// Function to make a PUT request to update a product
export const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.put(`${BASE_URL}/products/${productId}`, productData);
    return response.data;
  } catch (error) {
    handleErrors(error);
  }
};

// Function to make a DELETE request to delete a product
export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/Product/deleteProduct/${productId}`);
    return response.data;
  } catch (error) {
    handleErrors(error);
  }
};


// Function to make a GET request
export const getCategory = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/Category/allCategory`);
    return response.data;
  } catch (error) {
    handleErrors(error);
  }
};

export const addCategory = async (categoryData) => {
  try {
    const response = await axios.post(`${BASE_URL}/Category/insertCategory`, categoryData);
    return response.data;
  } catch (error) {
    handleErrors(error);
  }
};

export const getCategoryById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/Category/categoryById/`+id);
    return response.data;
  } catch (error) {
    handleErrors(error);
  }
};

export const updateCategory = async (Category) => {
  try {
    const response = await axios.put(`${BASE_URL}/Category/updateCategory`,Category);
    return response.data;
  } catch (error) {
    handleErrors(error);
  }
};

export const deleteCategory = async (categoryId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/Category/deleteCategory/${categoryId}`);
    return response.data;
  } catch (error) {
    handleErrors(error);
  }
};


export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/Product/productById/`+id);
    return response.data;
  } catch (error) {
    handleErrors(error);
  }
};

export const getCount = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/Dashboard/getCount`);
    return response.data;
  } catch (error) {
    handleErrors(error);
  }
};
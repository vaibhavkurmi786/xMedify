import axios from 'axios';

const BASE_URL = 'https://meddata-backend.onrender.com';

// Get all states
export const getStates = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/states`);
    // console.log(response, "this is the output");
    return response.data;
  } catch (error) {
    console.error('Error fetching states:', error);
    throw error;
  }
};

// Get cities by state
export const getCities = async (state) => {
  try {
    const response = await axios.get(`${BASE_URL}/cities/${state}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};

// Get medical centers by state and city
export const getMedicalCenters = async (state, city) => {
  try {
    const response = await axios.get(`${BASE_URL}/data`, {
      params: { state, city }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching medical centers:', error);
    throw error;
  }
};


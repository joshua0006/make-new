import axios from "axios";

const API_URL = "https://api.example.com"; // Replace with your actual API URL

export const fetchBooks = async () => {
  const response = await axios.get(`${API_URL}/books`);
  return response.data;
};

export const fetchBookById = async (id) => {
  const response = await axios.get(`${API_URL}/books/${id}`);
  return response.data;
};

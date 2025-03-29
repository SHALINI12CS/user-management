import axios from "axios";

const API_URL = "https://reqres.in/api"; // Replace with your actual backend URL

// 🟢 Login Function
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // Returns { token: "..." }
  } catch (error) {
    throw new Error(error.response?.data?.error || "Invalid credentials");
  }
};

// 🟢 Get All Users
export const getUsers = async (page = 1) => {
  try {
    const response = await axios.get(`${API_URL}/users?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// 🟢 Get User by ID
export const getUser = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

// 🟢 Create User
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create user");
  }
};

// 🟢 Update User
export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_URL}/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update user");
  }
};

// 🟢 Delete User
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/users/${id}`);
    return { success: true };
  } catch (error) {
    throw new Error("Failed to delete user");
  }
};

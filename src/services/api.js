import axios from "axios";
import { API_BASE_URL } from "../config/apiConfig";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchProjects = async () => {
  const response = await apiClient.get("/projects");
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await apiClient.post("/auth/login", credentials);
  return response.data;
};
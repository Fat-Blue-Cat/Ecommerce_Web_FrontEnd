import axios from "axios";

export const API_BASE_URL = "https://backend-web-ecommerce.onrender.com";
const jwt = localStorage.getItem("jwt");

export const api = axios.create({
  baseURL: API_BASE_URL, //base url to make request against
  headers: {
    Authorization: `Bearer ${jwt}`,
    "Content-Type": "application/json",
  },
});

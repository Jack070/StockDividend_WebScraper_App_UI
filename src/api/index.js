import axios from "axios";

const api = axios.create({
  baseURL: "https://stockdividend-webscraper-app-backend.onrender.com/api",
});

export const getStocksDeatil = () => api.get(`/stocks`);

const apis = {
  getStocksDeatil,
};

export default apis;

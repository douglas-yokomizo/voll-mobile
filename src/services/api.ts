import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.15.20:3000",
});

export default api;

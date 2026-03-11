import axios from "axios";

// creates axios instance
const axiosClient = axios.create({
  // nstead of writing http://localhost:8000/api/login every time, write /api/login
  baseURL: "http://localhost:8000",
  // include cookies on every request
  withCredentials: true,
  //   send json, recieve json
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosClient;

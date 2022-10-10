import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
});

// axiosInstance.interceptors.request.use((req) => {
//   const token = window.sessionStorage.getItem("token");
//   req.headers["Authorization"] = `Bearer ${token}`;
//   req.headers["Content-Type"] = "application/json; charset=utf-8";
//   return req;
// });

// axiosInstance.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err?.response?.status === 401) {
//     }
//     throw err;
//   }
// );

export default {
  get: (url, config = {}) => axiosInstance.get(url, config),
  post: (url, payload, config = {}) => axiosInstance.post(url, payload, config),
  put: (url, payload, config = {}) => axiosInstance.put(url, payload, config),
  delete: (url, config = {}) => axiosInstance.delete(url, config),
};

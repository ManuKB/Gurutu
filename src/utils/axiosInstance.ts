import axios from "axios";
import { toast } from "react-toastify";
import { logout } from "./auth";

const axiosInstance = axios.create({
   baseURL: 'https://manurajjuphoto1.pythonanywhere.com/api/v1',
  //baseURL: "http://192.168.31.147:5000/api/v1",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    "Content-Type": "application/json",
  },
});

// ✅ Request interceptor - attach token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response interceptor - handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      // Network error
      toast.error(
        error.response
          ? error.response.data
          : "Network error - please try again later"
      );
    } else {
      const status = error.response.status;

      switch (status) {
        case 400:
          toast.error("Bad request", error.response.data);
          break;
        case 401:
          toast.warn("Unauthorized - redirecting to login");
          logout(); // Clear auth data
          window.location.href = "/sign-out"; // Redirect to login
          return "logout";
        case 403:
          toast.warn("Forbidden - no access");
          break;
        case 404:
          toast.warn("Resource not found");
          break;
        case 409:
          toast.error("Record already present");
          break;
        case 500:
          toast.error("Server error", error.response.data);
          break;
        default:
          toast.error("Unhandled error", error.response);
      }
    }
    return Promise.reject(error); // let the calling code handle it if needed
  }
);

export default axiosInstance;

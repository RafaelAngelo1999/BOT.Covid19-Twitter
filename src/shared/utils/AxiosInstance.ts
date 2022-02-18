import axios from "axios";

const axiosInstance = axios.create({
  baseURL: String(process.env.URL_API_COVID),
});

export default axiosInstance;

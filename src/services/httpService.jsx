import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};

export default http;

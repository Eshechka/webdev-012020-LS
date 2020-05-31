import axios from 'axios';

const baseUrl='https://webdev-api.loftschool.com/';
const token = localStorage.getItem('token');

if (!token) console.warn("Отсутствует токен");


const requests = axios.create({
    baseURL: baseUrl,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });  
  
requests.interceptors.response.use(
  response => response,
  async error => {

    const originalRequest = error.config;

    if (error.response.status === 401) {
      const response = await requests.post("/refreshToken");
      const token = response.data.token;

      localStorage.setItem("token", token);
      requests.defaults.headers["Authorization"] = `Bearer ${token}`;
      originalRequest.headers["Authorization"] = `Bearer ${token}`;

      return axios(originalRequest);
    }

    return Promise.reject(error);
  }
);


export default requests;
import axios from 'axios';

const baseUrl='https://webdev-api.loftschool.com';
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');

if (!token) console.warn("Отсутствует токен");
if (!userId) console.warn("Отсутствует userId");

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

requests.userId = userId;

export default requests;
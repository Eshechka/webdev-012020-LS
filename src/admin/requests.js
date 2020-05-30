import axios from 'axios';

const baseUrl='https://webdev-api.loftschool.com/';

const token = localStorage.getItem('token');
// const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMyOSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTA3ODQxNzEsImV4cCI6MTU5MDc4NDIzMSwibmJmIjoxNTkwNzg0MTcxLCJqdGkiOiI3em1FOGZJSjFaWE1HU2hRIn0.R_ayGachVupbaqg9SrE2BgNSxlDMoBr8_NOH5E40wcA";
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

      // console.log(error);    
  
        localStorage.setItem("token", token);
        requests.defaults.headers["Authorization"] = `Bearer ${token}`;
        originalRequest.headers["Authorization"] = `Bearer ${token}`;
  
        return axios(originalRequest);
      }
  
      return Promise.reject(error);
    }
  );


export default requests;
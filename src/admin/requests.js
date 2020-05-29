import axios from 'axios';

const baseUrl='https://webdev-api.loftschool.com/';

// const token = localStorage.getItem('token');
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMyOSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTA3NTUzMTQsImV4cCI6MTU5MDc3MzMxNCwibmJmIjoxNTkwNzU1MzE0LCJqdGkiOiJVSGFHZ1dpaHN6RVc2ck1oIn0.2FuqT9mHw_nBjXT4e0w8Tx5ZS6J28VIgABg_A9YEx7g";
if (!token) console.log('Отсутствует токен');

const requests = axios.create({
    baseURL: baseUrl,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

export default requests;
import axios from 'axios';

const baseUrl='https://webdev-api.loftschool.com/';

// const token = localStorage.getItem('token');
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMyOSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTA2MTMxMDQsImV4cCI6MTU5MDYzMTEwNCwibmJmIjoxNTkwNjEzMTA0LCJqdGkiOiJqelI3dVFFUThnZ3JxZThuIn0.RXyWg5Yy2pM4gs499HE98sRX25mvf9R1PnPRQzspxzU";
if (!token) console.log('Отсутствует токен');

const requests = axios.create({
    baseURL: baseUrl,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

export default requests;
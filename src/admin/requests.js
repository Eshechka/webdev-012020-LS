import axios from 'axios';

const baseUrl='https://webdev-api.loftschool.com/';

// const token = localStorage.getItem('token');
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMyOSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTA1NjY4NzcsImV4cCI6MTU5MDU4NDg3NywibmJmIjoxNTkwNTY2ODc3LCJqdGkiOiJDYWxtQklxQVpTS0Z4QldQIn0.F3M7XFa8c4_heesZE8OU5Ipzsm8_qf1i1Jl7Dnzm_rU';
if (!token) console.log('Отсутствует токен');

const requests = axios.create({
    baseURL: baseUrl,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

export default requests;
import axios from 'axios';

const baseUrl='https://webdev-api.loftschool.com/';

// const token = localStorage.getItem('token');
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMyOSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTA2NjIxNDgsImV4cCI6MTU5MDY4MDE0OCwibmJmIjoxNTkwNjYyMTQ4LCJqdGkiOiJtNXpFMFE2RE9hYUx5QTAwIn0.NPo7e9ldIEw8zVuZ2nPCGTZxfknKk86KxjjLP930BkU";
if (!token) console.log('Отсутствует токен');

const requests = axios.create({
    baseURL: baseUrl,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

export default requests;
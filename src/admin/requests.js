import axios from 'axios';

const baseUrl='https://webdev-api.loftschool.com/';

// const token = localStorage.getItem('token');
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMyOSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTA2OTk4MDYsImV4cCI6MTU5MDcxNzgwNiwibmJmIjoxNTkwNjk5ODA2LCJqdGkiOiIyNlF0Qk9OMmNodDBNQ3dMIn0.sJwaChmlmixGnDdLpm0-TzSB7FvshGIFnQk3AafLvpk";
if (!token) console.log('Отсутствует токен');

const requests = axios.create({
    baseURL: baseUrl,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

export default requests;
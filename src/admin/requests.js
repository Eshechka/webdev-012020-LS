import axios from 'axios';

const baseUrl='https://webdev-api.loftschool.com/';

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMyOSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTA0Mzg1NjcsImV4cCI6MTU5MDQ1NjU2NywibmJmIjoxNTkwNDM4NTY3LCJqdGkiOiIzQmk1R0RVNVRKREE0eW5mIn0.ZtXaDry9lx4yKBaNNgQVkepMrtzFJnb43aaUxK27Ho8";

const requests = axios.create({
    baseURL: baseUrl,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

export default  requests;
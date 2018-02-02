const axios = require('axios');

const promise1 = axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response)  

const promise2 = axios.get('https://jsonplaceholder.typicode.com/posts/2')
  .then(response => response)   

const promise2 = axios.get('https://jsonplaceholder.typicode.com/posts/2')
  .then(response => response)

  // TODO
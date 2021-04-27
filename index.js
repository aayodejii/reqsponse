//this is just a test driver for the library

const request = new Reqsponse();
request
  .get('http://api.icndb.com/jokes/random/3')
  .then(data => console.log(data))
  .catch(error => console.log(error));

const data = {
  title: 'This is the custom Title',
  body: 'This is post body'
};

// request
//   .post('https://jsonplaceholder.typicode.com/posts/', data)
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// request
//   .put('https://jsonplaceholder.typicode.com/posts/62', data)
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// request
//   .delete('https://jsonplaceholder.typicode.com/posts/54', data)
//   .then(post => console.log(post))
//   .catch(error => console.log(error));
//

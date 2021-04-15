const request = new reqsponse();

// request.get('https://jsonplaceholder.typicode.com/posts/1', function(
//   error,
//   post
// ) {
//   if (!error) {
//     console.log(post);
//   } else {
//     console.log(error);
//   }
// });

data = {
  title: 'This is the title',
  body: 'Body of the post'
};
// request.post('https://jsonplaceholder.typicode.com/postst', data, function(
//   error,
//   post
// ) {
//   if (!error) {
//     console.log(post);
//   } else {
//     console.log(error);
//   }
// });

// request.put('https://jsonplaceholder.typicode.com/postss/1', data, function(
//   error,
//   post
// ) {
//   if (!error) {
//     console.log(post);
//   } else {
//     console.log(error);
//   }
// });

request.delete('https://jsonplaceholder.typicode.com/posts/1', function(
  error,
  response
) {
  if (!error) {
    console.log(response);
  } else {
    console.log(error);
  }
});

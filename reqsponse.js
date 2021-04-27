/**
 * Reqsponse Library
 * Making HTTP requests easier
 * This library can be use to make requests to APIs very fast
 * It reduces boilerplate code
 *
 * @version 2.0.0
 * @author Akenroye A.
 * @license MIT
 *
 * **/

class Reqsponse {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.text())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',

        headers: { 'Content-type': 'application/json' }
      })
        .then(response => response.json())
        .then(resolve('Resource Deleted!'))
        .catch(error => reject(error));
    });
  }
}

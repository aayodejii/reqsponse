function reqsponse() {
  this.http = new XMLHttpRequest();
}

//GET method- for making GET request
reqsponse.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  };
  this.http.send();
};

//POST method - for making POST request
reqsponse.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

//PUT method - for making PUT request
reqsponse.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, data);
  this.http.setRequestHeader('content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

//DELETE method - for making delete request
reqsponse.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, callback);
  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, 'Post deleted');
    } else {
      callback('Error: ' + self.responseText);
    }
  };
  this.http.send();
};

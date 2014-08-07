var domReady = require('domready');
var reactive = require('reactive');

domReady(function() {

  var userElm = document.getElementById('user');

  var user = {
    name: 'Adam',
    location: 'New Haven, CT'
  };

  reactive(userElm, user);

});

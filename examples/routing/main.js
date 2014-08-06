var domReady = require('domready');
var LocationBar = require('location-bar');
var locationBar = new LocationBar();

domReady(function() {

  var h1 = document.getElementById('heading'),
      home = document.getElementById('home'),
      about = document.getElementById('about')

  locationBar.route(/^about$/, function() {
    h1.innerHTML = 'About';
  })

  locationBar.route(/^$/, function() {
    h1.innerHTML = 'Home';
  })

  locationBar.start({
    pushState: true
  })

  home.onclick = function() {
    locationBar.update('/', { trigger: true })
    return false
  }

  about.onclick = function() {
    locationBar.update('/about', { trigger: true })
    return false
  }

});

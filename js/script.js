var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

function initMap() {
  var mapOptions = {
    zoom: 9,
    center: {lat: 34.867633, lng: -111.762398},
    disableDefaultUI: true
  }

  var map = new google.maps.Map(document.querySelector('.map'), mapOptions);
  var image = "img/icon-map-marker.svg";
  var myLatLng = new google.maps.LatLng(34.867633, -111.762398);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
    animation: google.maps.Animation.DROP
  });
}

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
    zoom: 13,
    center: {lat: 34.689968, lng: -111.761011},
    disableDefaultUI: true
  }

  var map = new google.maps.Map(document.querySelector('.map'), mapOptions);
  var myLatLng = new google.maps.LatLng(34.689968, -111.761011);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.DROP
  });
}

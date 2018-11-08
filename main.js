// function initMap() {

//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 3,
//       center: {lat: -28.024, lng: 140.887}
//     });

//     // Create an array of alphabetical characters used to label the markers.
//     var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//     // Add some markers to the map.
//     // Note: The code uses the JavaScript Array.prototype.map() method to
//     // create an array of markers based on a given "locations" array.
//     // The map() method here has nothing to do with the Google Maps API.
//     var markers = locations.map(function(location, i) {
//       return new google.maps.Marker({
//         position: location,
//         label: labels[i % labels.length]
//       });
//     });

//     // Add a marker clusterer to manage the markers.
//     var markerCluster = new MarkerClusterer(map, markers,
//         {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
//   }
//   var locations = [
//     {lat: -31.563910, lng: 147.154312},
//     {lat: -33.718234, lng: 150.363181},
//     {lat: -33.727111, lng: 150.371124},
//     {lat: -33.848588, lng: 151.209834},
//     {lat: -33.851702, lng: 151.216968},
//     {lat: -34.671264, lng: 150.863657},
//     {lat: -35.304724, lng: 148.662905},
//     {lat: -36.817685, lng: 175.699196},
//     {lat: -36.828611, lng: 175.790222},
//     {lat: -37.750000, lng: 145.116667},
//     {lat: -37.759859, lng: 145.128708},
//     {lat: -37.765015, lng: 145.133858},
//     {lat: -37.770104, lng: 145.143299},
//     {lat: -37.773700, lng: 145.145187},
//     {lat: -37.774785, lng: 145.137978},
//     {lat: -37.819616, lng: 144.968119},
//     {lat: -38.330766, lng: 144.695692},
//     {lat: -39.927193, lng: 175.053218},
//     {lat: -41.330162, lng: 174.865694},
//     {lat: -42.734358, lng: 147.439506},
//     {lat: -42.734358, lng: 147.501315},
//     {lat: -42.735258, lng: 147.438000},
//     {lat: -43.999792, lng: 170.463352}
//   ]















// 
var markerCluster;
var map;
var marker;
var markers;
var southEast = {lat: 34.487516, lng: -85.222430};


function initMap() {
   
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: southEast,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });

      // Define the LatLng coordinates for the polygon.
  var seCoords = [
    {lat: 32.378, lng: -86.318},
    {lat: 30.442, lng: -84.288},
    {lat: 33.751, lng: -84.387},
    {lat: 38.201, lng: -84.874},
    {lat: 32.299, lng: -90.185},
    {lat: 35.780, lng: -78.639},
    {lat: 34.002, lng: -81.029},
    {lat: 36.164, lng: -86.812},
    {lat: 38.978, lng: -76.497},
    {lat: 37.540, lng: -77.441},
    {lat: 38.344, lng: -81.609},
    {lat: 34.746, lng: -92.291},
 
];

// Construct the polygon.
var seTriangle = new google.maps.Polygon({
  paths: seCoords,
  strokeColor: 'purple',
  strokeOpacity: 0.8,
  strokeWeight: 3,
  fillColor: '#FF0000',
  fillOpacity: 0.35
});
seTriangle.setMap(map);

    // Create an array of alphabetical characters used to label the markers.
    var labels = [ "Montgomery AL", "Tallahassee FL", "Atlanta GA", "Frankfort KY", "Jackson MS", "Raleigh NC", "Columbia SC", "Nashville TN", "Annanpolis MD", "Baton Rouge LA", "Charleston WV", "Little Rock AK"];

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    markers = locations.map(function(location, i) {
      return new google.maps.Marker({
        position: location,
        animation: google.maps.Animation.BOUNCE,
        label: labels[i % labels.length]
      });
    });

    // Add a marker clusterer to manage the markers.
    markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        

  }

  var locations = [
    {lat: 32.378, lng: -86.318},
    {lat: 30.442, lng: -84.288},
    {lat: 33.751, lng: -84.387},
    {lat: 38.201, lng: -84.874},
    {lat: 32.299, lng: -90.185},
    {lat: 35.780, lng: -78.639},
    {lat: 34.002, lng: -81.029},
    {lat: 36.164, lng: -86.812},
    {lat: 38.978, lng: -76.497},
    {lat: 37.540, lng: -77.441},
    {lat: 38.344, lng: -81.609},
    {lat: 34.746, lng: -92.291},
  
  ]

  function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
    }
}

function clearMarkers() {
    setMapOnAll(null);
}

function showMarkers() {
setMapOnAll(map);
}


function deleteMarkers() {

}





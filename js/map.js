function initMap() {
  
  // Map showing route taken across all my moves
  var routeMap = new google.maps.Map(document.getElementById('routeMap'), {
    zoom: 5,
    center: {lat: -24.6091348, lng: 25.8602931}, //This centers the map on Gaberone, which allows the user to see South Africa & Mozambique clearly, but still see that the lines extend to other parts of the world.
    mapTypeId: 'terrain'
  });
  
  // solution for different colored polylines found at https://stackoverflow.com/questions/14379586/drawing-multiple-polyline-with-different-color-using-google-map-api-v3-asp-net/14380703
  var moveCoordinates = [
      {lat: -27.9591844, lng: 26.6020499},
      {lat: -27.9657077, lng: 26.7282434},
      {lat: -27.9257135, lng: 26.7856176},
      {lat: -27.9805649, lng: 26.6751437},
      {lat: -27.9924853, lng: 26.7007234},
      {lat: -27.9999838, lng: 26.7060059},
      {lat: -27.9511213, lng: 26.7203248},
      {lat: 51.6109992, lng: -0.1530215},
      {lat: 52.5937342, lng: -2.1962884},
      {lat: -28.344533, lng: 23.3745357},
      {lat: -28.7457787, lng: 24.7675327},
      {lat: -28.344533, lng: 23.3745357},
      {lat: -28.7597236, lng: 24.7535462},
      {lat: -28.344533, lng: 23.3745357},
      {lat: -29.7987433, lng: 30.8436911},
      {lat: -29.7820439, lng: 30.7666926},
      {lat: -29.7975638, lng: 30.7531501},
      {lat: -29.4874395, lng: 31.1611475},
      {lat: -28.344533, lng: 23.3745357},
      {lat: -25.830588, lng: 28.1895729},
      {lat: -25.8789339, lng: 28.1763935},
      {lat: -34.0397171, lng: 23.0605693},
      {lat: -25.8869328, lng: 28.05513},
      {lat: -24.1780957, lng: 28.6213679},
      {lat: -22.132292, lng: 35.441386},
      {lat: -25.8869328, lng: 28.05513},
      {lat: 50.7730802, lng: 0.2642302},
      {lat: 50.7722255, lng: 0.2456059},
      {lat: 50.8376962, lng: 0.4432705},
      {lat: -26.1650691, lng: 27.9433273},
      {lat: -29.8311422, lng: 30.8912992},
      {lat: -28.799218, lng: 27.79775},
      {lat: -26.1650691, lng: 27.9433273},
      {lat: -33.876401, lng: 18.6661407},
      {lat: -34.0584767, lng: 23.062194},
      {lat: -33.876401, lng: 18.6661407},
      {lat: -34.0368278, lng: 23.0473077},
      {lat: -34.0437721, lng: 23.0702642},
      {lat: -34.0348609, lng: 23.04487},
      {lat: 52.5685395, lng: -2.1677645},
      {lat: 52.4590004, lng: -2.2185321},
    ];

  var myColors = ["#fb141e", "#f8221f", "#f53023", "#f24028", "#ef4f2c", "#ef5b30", "#f27c32", "#f49d36", "#f6ba37", "#f9d43a", "#fbe63d", "#e5e53f", "#b1d641", "#86c945", "#63be4a", "#4db74e","#3fb34f", "#3bb178", "#38afa1", "#36adbf", "#34add3", "#33acde", "#2da5db", "#2290cd", "#1981c3", "#1479bd", "#1374ba", "#0f74b9", "#11539c", "#15357f", "#18236e", "#1a1b65", "#1b1862", "#2f1964", "#8e1f6f", "#c62375", "#e02577", "#e7257a", "#ea257a", "#b03f71",]

  for (var i = 0; i < moveCoordinates.length-1; i++) {
      var houseMove = new google.maps.Polyline({
        path: [moveCoordinates[i], moveCoordinates[i+1]],
        geodesic: true,
        strokeColor: myColors[i],
        strokeOpacity: 0.7,
        strokeWeight: 2,
        map: routeMap
    });
  }

}

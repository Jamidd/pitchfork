var mymap = L.map('mapid').setView([-33.44, -70.66],11);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
  }).addTo(mymap);

  var DefIcon = L.Icon.extend({
    options: {
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
    }
  });

  var greenIcon = new DefIcon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png'}),
      violetIcon = new DefIcon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png'}),
      blueIcon = new DefIcon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png'});

  L.marker([-33.45, -70.65], {icon: greenIcon}).addTo(mymap)
  .bindPopup("<b>Hello world!</b><br>I am a popup.");

  L.marker([-33.49, -70.65], {icon: violetIcon}).addTo(mymap)
  .bindPopup("<b>Hello world!</b><br>I am a popup.");

  L.marker([-33.46, -70.62], {icon: blueIcon}).addTo(mymap)
  .bindPopup("<b>Hello world!</b><br>I am a popup.");


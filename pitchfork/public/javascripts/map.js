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

  //optimo
  L.marker([-33.45, -70.65], {icon: greenIcon}).addTo(mymap)
  .bindPopup("<b>Hello world!</b><br>I am a popup.");

  // vinhas
  L.marker([-33.49, -70.65], {icon: violetIcon}).addTo(mymap)
  .bindPopup("<b>Hello world!</b><br>I am a popup.");

  //terrenos 
  L.marker([-33.46, -70.62], {icon: blueIcon}).addTo(mymap)
  .bindPopup("<b>Hello world!</b><br>I am a popup.");

function readTextFile(file)
{
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function ()
  {
    if(rawFile.readyState === 4)
    {
      if(rawFile.status === 200 || rawFile.status == 0)
      {
        var allText = rawFile.responseText;
        console.log(allText)
        alert(allText);
      }
    }
  }
  rawFile.send(null);
}

function execute(){
  console.log(readTextFile("data/costos_terrenos.csv"));
  // document.getElementById('texto').innerHTML = await readFileContent("../../costos_terrenos.csv");
}
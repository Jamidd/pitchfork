
var mymap = L.map('mapid').setView([-33.97, -70.74], 8);
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

var greenIcon = new DefIcon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png' }),
    violetIcon = new DefIcon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png' }),
    blueIcon = new DefIcon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png' });

var myLat, myLon, farmLat, farmLon, dist;

function getLatLon() {
    return [myLat, myLon]
}

function getCoords(address) {
    // Creamos el objeto geodecoder
    var geocoder = new google.maps.Geocoder();

    if (address != '') {
        // Llamamos a la función geodecode pasandole la dirección que hemos introducido en la caja de texto.
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == 'OK') {
                // Mostramos las coordenadas obtenidas en el p con id coordenadas
                // document.getElementById("coordenadas").innerHTML = 'Coordenadas:   ' + results[0].geometry.location.lat() + ', ' + results[0].geometry.location.lng();
                myLat = results[0].geometry.location.lat();
                myLon = results[0].geometry.location.lng()
                L.marker([myLat, myLon], { icon: blueIcon })
                    .addTo(mymap).bindPopup("Tu Ubicación");
            }
        });
    }
}

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                add_terreno(allText);
            }
        }
    }
    rawFile.send(null);
}

function add_terreno(locations) {
    var locs = locations.split("\n")
    const element = locs[0].split(';');
    if (element.length === 5) {
        farmLat = element[3];
        farmLon = element[4];
        L.marker([farmLat, farmLon], { icon: greenIcon })
            .addTo(mymap).bindPopup("FungiPackage");
    }
}

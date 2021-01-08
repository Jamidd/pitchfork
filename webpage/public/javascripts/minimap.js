
// const spawn = require("child_process").spawn;

var myLat, myLon, farmLat, farmLon;

function getLatLon() {
    return [myLat, myLon, farmLat, farmLon]
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
                console.log(results[0].geometry.location)
                myLat = results[0].geometry.location.lat();
                myLon = results[0].geometry.location.lng()
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
    }
}


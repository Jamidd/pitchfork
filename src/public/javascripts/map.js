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

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                if (file === "data/costos_terrenos.csv") {
                    console.log('adding terrenos')
                    add_terrenos(allText, true);
                } else {
                    console.log('adding vinahas')
                    add_terrenos(allText, false);
                }
                
            }
        }
    }
    rawFile.send(null);
}

function add_terrenos(locations, terrenos) {
    var locs = locations.split("\n")
    for (let i = 0; i < locs.length; i++) {
        const element = locs[i].split(';');

        if (terrenos === true) {
            console.log('entre', element, element.length)
            if (element.length === 5) {
                console.log('entre2')
                if (i === 0) {
                    L.marker([element[3], element[4]], { icon: greenIcon })
                    .addTo(mymap).bindPopup("Terreno: " + element[0] + "<br>Precio Terreno: " + element[1] + "<br>Costo Total: " + element[2]);
                } else {
                    L.marker([element[3], element[4]], { icon: blueIcon })
                    .addTo(mymap).bindPopup("Terreno: " + element[0] + "<br>Precio Terreno: " + element[1] + "<br>Costo Total: " + element[2]);
                }
            }
        } else {
            console.log(element)
            if (element.length === 4) {
                L.marker([element[2], element[3]], { icon: violetIcon })
                .addTo(mymap).bindPopup("Vinha: " + element[0] + "<br>Produccion: " + element[1]);
            }
        }
        
    }
}

function execute() {
    readTextFile("data/costos_terrenos.csv");
    readTextFile("data/vinas.txt");
    // document.getElementById('texto').innerHTML = await readFileContent("../../costos_terrenos.csv");
}
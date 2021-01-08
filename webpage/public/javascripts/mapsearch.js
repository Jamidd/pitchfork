function getCoords(address){
 // Creamos el objeto geodecoder
 var geocoder = new google.maps.Geocoder();

 if(address!='')
 {
  // Llamamos a la función geodecode pasandole la dirección que hemos introducido en la caja de texto.
 geocoder.geocode({ 'address': address}, function(results, status)
 {
   if (status == 'OK')
   {
// Mostramos las coordenadas obtenidas en el p con id coordenadas
   document.getElementById("coordenadas").innerHTML='Coordenadas:   '+results[0].geometry.location.lat()+', '+results[0].geometry.location.lng();

// TODO: Situar punto en mapa
   L.marker([results[0].geometry.location.lat(), results[0].geometry.location.lng()], { icon: blueIcon })
   .addTo(mymap).bindPopup("Tu Ubicación");
   }
  });
 }
}

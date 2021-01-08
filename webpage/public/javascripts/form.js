function validateForm() {
  if (document.forms["mapForm"]["direccion"].value == "") {
    alert("Debe ingresar su dirección para ubicarlo en el mapa");
    return false;
  }
  if (!isNaN(document.forms["mapForm"]["cantidad_escobajo"].value)) {
    alert("Debe ingresar su dirección para ubicarlo en el mapa");
    return false;
  }
  if (!isNaN(document.forms["mapForm"]["costo_empaquetamiento"].value)) {
    alert("Debe ingresar su dirección para ubicarlo en el mapa");
    return false;
  }
  return true
}

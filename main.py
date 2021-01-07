class terreno:
    def __init__(self, nombre, precio, lat, lon):
        self.nombre = nombre
        self.precio = int(precio)
        self.lat = lat
        self.lon = lon

class vina:
    def __init__(self, nombre, produccion, lat, lon):
        self.nombre = nombre
        self.produccion = int(produccion)
        self.lat = lat
        self.lon = lon

terrenos = list()
vinas = list()

with open('terrenos.txt', 'r')
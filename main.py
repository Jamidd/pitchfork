import math 
from distancias import Distancia

COSTO_KM = 172 #CLP
COSTO_KG_PROD = 8.3 #CLP/KG
PRECIO_PACKAGE = 8400 #CLP/KG
PONDERACION_ESCOBAJO = 0.08 #Ponderación KG/CLP
PRODUCCION = 1.08 #TASA
CAPACIDAD_CAMION = 3000

class Terreno:
    def __init__(self, nombre, precio, lat, lon):
        self.nombre = nombre
        self.precio = int(precio)
        self.lat = float(lat)
        self.lon = float(lon)
        self.costo = 0
    
    def costo_transporte(self, vinas):
        self.costo = self.precio
        for vina in vinas:
            #TODO: ida y vuelta 
            distancia = self.distancia(vina)
            costo_recoleccion =  2 * math.ceil(vina.produccion/CAPACIDAD_CAMION) * distancia * COSTO_KM
            costo_entrega = 2 * math.ceil((PRODUCCION *  vina.produccion)/CAPACIDAD_CAMION) * distancia * COSTO_KM
            costo_produccion = (PRODUCCION * COSTO_KG_PROD - PONDERACION_ESCOBAJO) * vina.produccion
            self.costo += costo_recoleccion + costo_entrega + costo_produccion

    def distancia(self, coordenated_object):
        calculador_distancia = Distancia()
        return calculador_distancia.calculate((self.lat, self.lon), (coordenated_object.lat, coordenated_object.lon))

    def __lt__(self, other):
        return self.costo < other.costo
    
    def __le__(self, other):
        return self.costo <= other.costo

    def __eq__(self, other):
        return self.costo == other.costo

    def __nq__(self, other):
        return self.costo != other.costo

    def __gt__(self, other):
        return self.costo > other.costo
    
    def __ge__(self, other):
        return self.costo >= other.costo
    
    def __str__(self):
        return "{} costo: {}".format(self.nombre, self.costo)


class Vina:
    def __init__(self, nombre, produccion, lat, lon):
        self.nombre = nombre
        self.produccion = int(produccion)
        self.lat = float(lat)
        self.lon = float(lon)

terrenos = list()
vinas = list()

with open('terrenos.txt', 'r', encoding="utf-8") as terrenosFile:
    for terreno in terrenosFile:
        terrenos.append(Terreno(*terreno.split(";")))

with open('vinas.txt', 'r', encoding="utf-8") as vinasFile:
    for vina in vinasFile:
        vinas.append(Vina(*vina.split(";")))

for terreno in terrenos:
    terreno.costo_transporte(vinas)

with open("costos_terrenos.csv", "w") as file:
    for t in terrenos:
        file.write(f"{t.nombre}, {t.precio}, {t.costo}, {t.lat}, {t.lon}\n")
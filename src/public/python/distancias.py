import osmnx as ox
import networkx as nx


class Distancia:
    def __init__(self, map_path):
        self.map_path = map_path
        self.network = nx.read_gpickle(self.map_path)
    
    # p1, p2 son un par-cordenadas (lat, lon)
    def calculate(self, p1, p2):
        orig_node = ox.get_nearest_node(self.network, p1)
        dest_node = ox.get_nearest_node(self.network, p2)
        dist = nx.shortest_path_length(self.network, orig_node, dest_node, weight = 'length')
        return dist

    # p1 punto norte-oeste, p2 punto sur-este. Son pares de coordenadas (lat, lon)
    def reload_map(self, p1, p2):
        try:
            network = ox.graph_from_bbox(p1[0], p2[0], p2[1], p1[1], custom_filter = '["highway"~"primary|secondary|tertiary"]')
            nx.write_gpickle(network, self.map_path)
            self.network = network
            return True
        except:
            return False
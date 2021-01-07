import osmnx as ox
import networkx as nx

class distancias:
    def __init__(self):
        self.network = nx.read_gpickle("network.gpickle")
    
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
            nx.write_gpickle(network, "network.gpickle")
            self.network = network
            return True
        except:
            return False
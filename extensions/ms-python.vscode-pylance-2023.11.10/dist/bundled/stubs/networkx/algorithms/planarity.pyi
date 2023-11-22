from typing import Mapping
from numpy.typing import ArrayLike
from collections import defaultdict

from ..classes.graph import Graph

__all__ = ["check_planarity", "is_planar", "PlanarEmbedding"]

def is_planar(G: Graph) -> bool: ...
def check_planarity(G: Graph, counterexample: bool = False): ...
def check_planarity_recursive(G: Graph, counterexample=False): ...
def get_counterexample(G: Graph): ...
def get_counterexample_recursive(G: Graph): ...

class Interval:
    def __init__(self, low=None, high=None): ...
    def empty(self): ...
    def copy(self): ...
    def conflicting(self, b, planarity_state): ...

class ConflictPair:
    def __init__(self, left=..., right=...): ...
    def swap(self): ...
    def lowest(self, planarity_state): ...

def top_of_stack(l): ...

class LRPlanarity:

    __slots__: list = ...

    def __init__(self, G): ...
    def lr_planarity(self) -> Mapping: ...
    def lr_planarity_recursive(self): ...
    def dfs_orientation(self, v): ...
    def dfs_orientation_recursive(self, v): ...
    def dfs_testing(self, v): ...
    def dfs_testing_recursive(self, v): ...
    def add_constraints(self, ei, e): ...
    def remove_back_edges(self, e): ...
    def dfs_embedding(self, v): ...
    def dfs_embedding_recursive(self, v): ...
    def sign(self, e): ...
    def sign_recursive(self, e): ...

class PlanarEmbedding(nx.DiGraph):
    def get_data(self) -> Mapping: ...
    def set_data(self, data: Mapping): ...
    def neighbors_cw_order(self, v): ...
    def check_structure(self): ...
    def add_half_edge_ccw(self, start_node, end_node, reference_neighbor): ...
    def add_half_edge_cw(self, start_node, end_node, reference_neighbor): ...
    def connect_components(self, v, w): ...
    def add_half_edge_first(self, start_node, end_node): ...
    def next_face_half_edge(self, v, w) -> tuple: ...
    def traverse_face(self, v, w, mark_half_edges: set | None = None) -> ArrayLike: ...
    def is_directed(self): ...

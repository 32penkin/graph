## Graph
 ###  Graph
  is an abstract data type that is meant to implement the undirected graph and directed graph concepts from mathematics, specifically the field of graph theory.
 
 A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph. These pairs are known as edges, arcs, or lines for an undirected graph and as arrows, directed edges, directed arcs, or directed lines for a directed graph. The vertices may be part of the graph structure, or may be external entities represented by integer indices or references.

 You can use methods of Graph such as:
 * addNode(data) - to add node to your graph
 * hasNode(data) - to check whether the graph contains such a node
 * removeNode(data) - to remove node with its edges
 * addEdge(from, to) - to add the edge from one node to another
 * hasEdge(from, to) - to check whether there is an edge beetween two nodes
 * removeEdge(from, to) - to delete an edge beetwee two nodes

 ###  Example:

 To create a new Graph:
 ```sh
  const graph = new Graph();
  ```
 Let's a little play with this empty graph:
 ```sh
 graph.addNode('node0');
 graph.addNode('node1');
 graph.addNode('node2');
 graph.addNode('node3');
 graph.addNode('node4');
 
 graph.addEdge('node0', 'node1');
 graph.addEdge('node0', 'node2');
 graph.addEdge('node1', 'node0');
 graph.addEdge('node1', 'node4');
 graph.addEdge('node2', 'node0');
 graph.addEdge('node2', 'node4');
 graph.addEdge('node3', 'node4');
 graph.addEdge('node4', 'node1');
 graph.addEdge('node4', 'node1');
 graph.addEdge('node4', 'node1');
 
 graph.removeNode('node2');
 
 graph.printGraph();
 ```
 Now your graph looks like:
 ```sh
 node0:  { edges: { node1: true } }
 node1:  { edges: { node0: true, node4: true } }
 node3:  { edges: { node4: true } }
 node4:  { edges: { node1: true, node3: true } }
 ```
 Also u can init your graph through the adjacency matrix:
 ```sh
 const arr = [
   [0 ,1, 1, 0, 0],
   [1, 0, 0, 0, 1],
   [1, 0, 0, 0, 1],
   [0, 0, 0, 0, 1],
   [0, 1, 1, 1, 0]
 ];
 
 const graph = new Graph({matrix: true}, arr);
 
 graph.printGraph();
 ```
 Now your graph looks like:
 ```sh
 node0:  { edges: { node1: true, node2: true } }
 node1:  { edges: { node0: true, node4: true } }
 node2:  { edges: { node0: true, node4: true } }
 node3:  { edges: { node4: true } }
 node4:  { edges: { node1: true, node2: true, node3: true } }
 ```
  Also u can init your graph through the adjacency list:
  ```sh
  const list0 = new DoublyLinkedList();
  list0.append('node0');
  list0.append('node1');
  list0.append('node2');
  
  const list1 = new DoublyLinkedList();
  list1.append('node1');
  list1.append('node0');
  list1.append('node4');
  
  const list2 = new DoublyLinkedList();
  list2.append('node2');
  list2.append('node0');
  list2.append('node4');
  
  const list3 = new DoublyLinkedList();
  list3.append('node3');
  list3.append('node4');
  
  const list4 = new DoublyLinkedList();
  list4.append('node4');
  list4.append('node1');
  list4.append('node2');
  list4.append('node3');
  
  const initList = [list0, list1, list2, list3, list4];
  
  const graph = new Graph({list: true}, initList);
  
  graph.printGraph();
  ```
   Now your graph looks like:
   ```sh
   node0:  { edges: { node1: true, node2: true } }
   node1:  { edges: { node0: true, node4: true } }
   node2:  { edges: { node0: true, node4: true } }
   node3:  { edges: { node4: true } }
   node4:  { edges: { node1: true, node2: true, node3: true } }
   ```

---

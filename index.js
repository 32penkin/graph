const Graph = require('./src/graph');
const DoublyLinkedList = require('./node_modules/dllpenk/src/doubly-linked-list');

const arr = [
  [0 ,1, 1, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 1, 1, 1, 0]
];
const graph1 = new Graph({matrix: true}, arr);


// for(let i = 0; i < arr.length; i++) {
//   for(let j = 0; j < arr.length; j++) {
//     if(arr[i][j] == 1) {
//       console.log('node' + i + ' and ' + 'node' + j + ' has edge');
//     }
//   }
// }


// console.log(graph1);

// console.log(list1);


// const list0 = new DoublyLinkedList();
// list0.append('node0');
// list0.append('node1');
// list0.append('node2');
//
// const list1 = new DoublyLinkedList();
// list1.append('node1');
// list1.append('node0');
// list1.append('node4');
//
// const list2 = new DoublyLinkedList();
// list2.append('node2');
// list2.append('node0');
// list2.append('node4');
//
// const list3 = new DoublyLinkedList();
// list3.append('node3');
// list3.append('node4');
//
// const list4 = new DoublyLinkedList();
// list4.append('node4');
// list4.append('node1');
// list4.append('node2');
// list4.append('node3');
//
// const initList = [list0, list1, list2, list3, list4];
//
// initList.forEach(item => {
//   console.log(item);
// });

const gr1 = new Graph();

gr1.addNode('node1');
gr1.addNode('node2');
gr1.addNode('node3');
gr1.addEdge('node1', 'node2');
gr1.addEdge('node1', 'node3');

console.log(gr1.hasEdge('node1', 'node2'));
console.log(gr1.hasEdge('node1', 'node3'));
console.log(gr1.hasEdge('node2', 'node3'));
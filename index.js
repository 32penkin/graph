const Graph = require('./src/graph');
const DoublyLinkedList = require('./node_modules/dllpenk/src/doubly-linked-list');


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





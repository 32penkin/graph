const Graph = require('./src/graph');


const graph1 = new Graph();

const arr = [
  [0 ,1, 1, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 1, 1, 1, 0]
];



// for(let i = 0; i < arr.length; i++) {
//   for(let j = 0; j < arr.length; j++) {
//     if(arr[i][j] == 1) {
//       console.log('node' + i + ' and ' + 'node' + j + ' has edge');
//     }
//   }
// }


graph1.matrixInit(arr);



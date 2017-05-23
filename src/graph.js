class Graph {
  constructor(options, initData) {
    this.nodes = {};
    if(options.matrix) {
      this.matrixInit(initData)
    } else {
      this.listInit(initData);
    }
  }

  addNode(data) {

  }

  removeNode(data) {

  }

  hasNode(data) {

  }

  addEdge(from, to) {

  }

  removeEdge(from, to) {

  }

  hasEdge(from, to) {

  }

  matrixInit(arr) {

  }

  listInit(list) {

  }
}

module.exports = Graph;
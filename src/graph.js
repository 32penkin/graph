class Graph {
  constructor(options, initData) {
    this.nodes = {};
    if(!options && !initData) {
      this.simpleInit();
    }
    else if(options.matrix) {
      this.matrixInit(initData)
    } else {
      this.listInit(initData);
    }
  }

  addNode(data) {
    this.nodes[data] = {
      edges: {}
    };
  }

  removeNode(data) {
    for (let conNode in this.nodes[data].edges) {
      this.removeEdge(data, conNode);
    }

    delete this.nodes[data];
  }

  hasNode(data) {
    return this.nodes[data] ? true : false;
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

  simpleInit() {

  }
}

module.exports = Graph;
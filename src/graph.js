class Graph {
  constructor(options, initData) {
    this.nodes = {};

    if (!options && !initData) this.simpleInit();
    else this.otherInit(options, initData);
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
    return !!this.nodes[data];
  }

  addEdge(from, to) {
    if (this.hasNode(from) && this.hasNode(to)) {
      this.nodes[from].edges[to] = true;
      this.nodes[to].edges[from] = true;
    }
  }

  removeEdge(from, to) {
    if (this.hasNode(from) && this.hasNode(from)) {
      delete this.nodes[from].edges[to];
      delete this.nodes[to].edges[from];
    }
  }

  hasEdge(from, to) {
    return !!this.nodes[from].edges[to];
  }

  matrixInit(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.addNode('node' + (i));
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i][j] == 1) {
          this.addEdge('node' + i, 'node' + j);
        }
      }
    }
    return this;
  }

  listInit(arrOfList) {
    for (let i = 0; i < arrOfList.length; i++) {
      this.addNode(arrOfList[i].head.data);
      for (let j = 0; j < callback(arrOfList[i]).length; j++) {
        this.addEdge(arrOfList[i].head.data, callback(arrOfList[i])[j]);
      }
    }

    function callback(list) {
      let current = list.head;
      let i = 1;
      let tempArr = [];
      while (i < list.length) {
        tempArr.push(list.get(i));
        i++;
      }
      return tempArr;
    }

    return this;
  }

  simpleInit() {
    this.nodes = {};
  }

  printGraph() {
    for (let key in this.nodes) {
      console.log(key + ': ', this.nodes[key]);
    }
  }

  otherInit(options, initData) {
    if (options.matrix) {
      this.matrixInit(initData)
    } else if (options.list) {
      this.listInit(initData);
    }
  }
}

module.exports = Graph;
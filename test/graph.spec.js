const Graph = require('../src/graph');
const DoublyLinkedList = require('../node_modules/dllpenk/src/doubly-linked-list');

describe('Graph', () => {
  describe('#constructor', () => {
    const optionsMatrix = {
      matrix: true,
      list: false
    };

    const optionsList = {
      matrix: false,
      list: true
    };

    const initMatrix = [
      [0 ,1, 1, 0, 0],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 1, 1, 1, 0]
    ];

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
    const initList1 = [];

    const gr3 = new Graph(optionsList, initList);

    it('assigns {} to this.nodes', () => {
      expect(typeof gr3.nodes).to.equal('object');
    });

    // it('calls this.matrixInit', () => {
    //   const gr1 = new Graph(optionsMatrix, initMatrix);
    //   //sinon.spy(gr1.matrixInit(initMatrix), 'matrixInit()');
    //   expect(gr1.matrixInit(initMatrix)).to.have.been.called;
    // });
    //
    // it('calls this.listInit', () => {
    //   const gr2 = new Graph(optionsList, initList);
    //   //sinon.spy(gr2.listInit(initList), 'listInit()');
    //   expect(gr2.listInit(initList)).to.have.been.called;
    // });
  });

  describe('#addNode, #hasNode', () => {
    const gr1 = new Graph();

    gr1.addNode('node1');
    gr1.addNode('node2');
    gr1.addNode('node3');

    it('check if nodes was added (1)', () => {
      expect(gr1.hasNode('node1')).to.equal(true);
    });

    it('check if nodes was added (2)', () => {
      expect(gr1.hasNode('node2')).to.equal(true);
    });

    it('check if nodes was added (3)', () => {
      expect(gr1.hasNode('node3')).to.equal(true);
    });

    it('check if nodes was added (4)', () => {
      expect(gr1.hasNode('node4')).to.equal(false);
    });
  });

  describe('#removeNode', () => {
    const gr1 = new Graph();

    gr1.addNode('node1');
    gr1.addNode('node2');
    gr1.addNode('node3');

    gr1.removeNode('node2');

    it('check if nodes was added (1)', () => {
      expect(gr1.hasNode('node1')).to.equal(true);
    });

    it('check if nodes2 was removed (2)', () => {
      expect(gr1.hasNode('node2')).to.equal(false);
    });

    it('check if nodes was added (3)', () => {
      expect(gr1.hasNode('node3')).to.equal(true);
    });

    it('check if nodes was added (4)', () => {
      expect(gr1.hasNode('node4')).to.equal(false);
    });

    it('check if nodes was added (5)', () => {
      gr1.removeNode('node1');
      gr1.removeNode('node3');
      expect(gr1.hasNode('node1')).to.equal(false);
      expect(gr1.hasNode('node3')).to.equal(false);
    });
  });

  describe('#addEdge, #hasEdge', () => {
    const gr1 = new Graph();

    gr1.addNode('node1');
    gr1.addNode('node2');
    gr1.addNode('node3');
    gr1.addEdge('node1', 'node2');
    gr1.addEdge('node1', 'node3');

    it('check if edge was added', () => {
      expect(gr1.hasEdge('node1', 'node2')).to.equal(true);
    });

    it('check if edge was added', () => {
      expect(gr1.hasEdge('node1', 'node3')).to.equal(true);
    });

    it('check if edge was added', () => {
      expect(gr1.hasEdge('node2', 'node3')).to.equal(false);
    });
  });

  describe('#removeEdge', () => {
    const gr1 = new Graph();

    gr1.addNode('node1');
    gr1.addNode('node2');
    gr1.addNode('node3');
    gr1.addEdge('node1', 'node2');
    gr1.addEdge('node1', 'node3');

    gr1.removeEdge('node1', 'node2');
    gr1.removeEdge('node1', 'node3');

    it('check if edge deleted', () => {
      expect(gr1.hasEdge('node1', 'node2')).to.equal(false);
    });

    it('check if edge removed', () => {
      expect(gr1.hasEdge('node1', 'node3')).to.equal(false);
    });
  });

});
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

});
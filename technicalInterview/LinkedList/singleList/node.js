class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error('Next node must be a member of the Node class.');
      }
    }
  
    getNextNode() {
      return this.next;
    }
  }
  
  module.exports = Node;



const LinkedList = require('../doubleList/DoublyLinkedList')

const testList = new LinkedList();
for (let i = 0; i <= 10; i++) {
  testList.addToTail(i);
}

testList.printList();
swapNodes(testList, 2, 5);
testList.printList();

function swapNodes(list, data1, data2) {
  console.log(`Swapping ${data1} and ${data2}:`);
  
  let node1Prev = null;
  let node2Prev = null;
  let node1 = list.head;
  let node2 = list.head;

  if (data1 === data2) {
    console.log('Elements are the same - no swap to be made');
    return;
  }
  
  while (node1 !== null) {
    if (node1.data === data1) { 
      break;
    }
    node1Prev = node1;
    node1 = node1.getNextNode();
  }
  
  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }
    node2Prev = node2;
    node2 = node2.getNextNode();
  }
  
  if (node1 === null || node2 === null) {
    console.log('Swap not possible - one or more element is not in the list');
    return;
  }

  if (node1Prev === null) {
    list.head = node2;
  } else {
    node1Prev.setNextNode(node2);
  }

  if (node2Prev === null) { 
    list.head = node1;
  } else {
node2Prev.setNextNode(node1);
  }
  
  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp); 
}

/*
description:	two pointer linked list techniques.
credit:		codeCademy.
link:			https://www.codecademy.com/paths/pass-the-technical-interview-with-javascript/tracks/javascript-linear-data-structures/modules/linked-list-practice/articles/two-pointer-linked-list-techniques.
*/

const LinkedList = require('./LinkedList');
const testLinkedList = require('./testLinkedList.js');
// Complete this function
const nthLastNode = ( linkedList, n) => {
  let lastPointer = null;
  let tailPointer = linkedList.head;
  let count = 0;
  while(tailPointer){
    tailPointer = tailPointer.next;
    if(count >= n){
      if(!lastPointer){
        lastPointer = linkedList.head;
      }
      lastPointer = lastPointer.next;
    }
    count++
  }
return lastPointer;
  
};

// Test your function yourself:
console.log(nthLastNode(testLinkedList, 4));

// Leave this so that we can test your code:
module.exports = nthLastNode;



const generateTestLinkedList = require('./generateTestLinkedList');

const findMiddle = linkedList => {
  let fastPointer = linkedList.head;
  let slowPointer = linkedList.head;
  while(fastPointer !== null){
    fastPointer = fastPointer.getNextNode()
    if(fastPointer !== null){
      fastPointer = fastPointer.getNextNode();
      slowPointer = slowPointer.getNextNode();
    }
  }
  return slowPointer;
};

// Test your function yourself:
console.log(findMiddle(generateTestLinkedList(7)));

// Leave this so that we can test your code:
module.exports = findMiddle;

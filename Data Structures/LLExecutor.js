"use strict"
import LinkedListNode from 'LinkedListNode';

// Simple but inefficient way to make linked list chain
// const node1 = new LinkedListNode(Math.random() * 100, null);
// const node2 = new LinkedListNode(Math.random() * 100, null);
// const node3 = new LinkedListNode(Math.random() * 100, null);
// const node4 = new LinkedListNode(Math.random() * 100, null);
// const node5 = new LinkedListNode(Math.random() * 100, null);
// node4.next = node5;
// node3.next = node4;
// node2.next = node3;
// node1.next = node2;

// recursively calculate the linked list chain.
function initializeLinkedList(count, value = Math.random() * 100) {
    // const node = new LinkedListNode(value, null);
    // if (count !== 0) {
    //     node.next = initializeLinkedList(--count);
    // }
    // return node;

    // shortened way
    return new LinkedListNode(value, (count !== 0) ? initializeLinkedList(--count) : null);
}


const initNodeCount = 5;
const list = initializeLinkedList(initNodeCount);

// Add to Linked List 
function addToLinkedList(node, list, position = null) {
    if (!position) {
        // (loop till the end and then add)
        if (list) {
            let nextNode = list;
            do {
                nextNode = nextNode.next;
            } while (nextNode.next != null)
            nextNode.next = node;
        }
    } else {
        // add in beginning 
        node.next = list;
        list = node;
    }  
    return list;  
}

let lastNode = new LinkedListNode(15, null);
addToLinkedList(lastNode, list);

let firstNode = new LinkedListNode(5, null);
const updatedList = addToLinkedList(firstNode, list, 1);

console.log(updatedList);

// delete from LinkedList


// Insert into LinkedList
// list node, insertedNode, position


// Add to Linked List


// get Linked list depth


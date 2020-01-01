"use strict"
export class LinkedListNode {
    // # denotes private fields
    #data;
    #next;
    
    constructor(data = null, next = null) {
        this.#data = data;
        this.#next = next;
    }

    get value() {
        return this.#data;
    }
    set value(value) {
        this.#data = value;
    }
    get next() {
        return this.#next;
    }
    set next(nextNode) {
        this.#next = nextNode;
    }
}
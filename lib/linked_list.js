// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.length) return undefined;

        let current = this.head;
        let next = current.next;

        for (let i = 0; i < this.length - 2; i += 1) {
            current = next;
        }
        this.tail = current;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return next;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.length) return undefined;
        let removedHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return removedHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === target) {
                return true;
            } else {
                currentNode = currentNode.next;
            }
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index > this.length - 1) return null;

        let currentNode = this.head;
        let i = 0;

        while (i !== index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (!this.get(index)) {
            return false;
        } else {
            let targetNode = this.get(index);
            targetNode.value = val;
            return true;
        }
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        const newNode = new Node(val);

        if (index < 0 || index > this.length - 1) {
            return false;
        } else if (index === 0) {
            let nextNode = this.head;
            newNode.next = nextNode;
            this.head = newNode;
        } else {
            let prevNode = this.get(index - 1);
            let nextNode = prevNode.next;
            prevNode.next = newNode;
            newNode.next = nextNode;
        }
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index > this.length - 1) {
            return undefined;
        } else {
            let prevNode = this.get(index - 1);
            let targetNode = prevNode.next;
            let nextNode = targetNode.next;
            prevNode.next = nextNode;
            this.length--;
            return targetNode;
        }
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;

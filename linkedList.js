class LinkedList {
  constructor() {
    this.head = null; // First element of the list
    this.next = null; // Last element of the list
  }

  append(value) {
    const newNode = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = { value: value, next: this.head };

    this.head = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currNode = this.head;
    while (currNode.next) {
      if (currNode.next.value === value) {
        currNode.next = currNode.next.next;
      } else {
        currNode = currNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = currNode;
    }
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);

    if (existingNode) {
      const newNode = { value: value, next: existingNode.next };
      existingNode.next = newNode;
    }
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let currNode = this.head;
    while (currNode) {
      if (currNode.value === value) {
        return currNode;
      }
      currNode = currNode.next;
    }

    return null;
  }

  toArray() {
    const list = [];

    let currNode = this.head;
    while (currNode) {
      list.push(currNode);
      currNode = currNode.next;
    }
    return list;
  }
}

const linkList = new LinkedList();

linkList.append("sajid");
linkList.append(123);
linkList.prepend(true);
linkList.append("sheikh");
linkList.append("sheikh");
linkList.prepend("rashid");
linkList.prepend("rashid");
linkList.insertAfter("after123", 123);
linkList.delete("rashid");

console.log(linkList.toArray());

/**
 * expected output =>
  true
  sajid
  123
  after123
  sheikh
  sheikh
 */

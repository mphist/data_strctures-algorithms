class LinkedList {
  constructor(val = null) {
    if (val !== null) {
      // construct a node
      this.val = val
      this.next = null
    } else {
      // construct an empty list
      this.head = null
    }
  }

  addAtHead(val) {
    // adds a new node at head
    if (!this.head) {
      this.head = new LinkedList(val)
    } else {
      const node = new LinkedList(val)
      node.next = this.head
      this.head = node
    }
  }

  get(index) {
    // returns value at the node of the index
    if (index < 0) {
      return -1
    }

    if (!this.head) {
      return -1
    }

    if (this.head && !this.head.next && index === 0) {
      // list has only one item
      return this.head.val
    }

    let i = 0
    let cur = this.head
    while (i < index) {
      if (cur && cur.next) {
        cur = cur.next
        i++
      } else {
        return -1
      }
    }

    if (cur) {
      return cur.val
    }
  }

  addAtIndex(index, val) {
    if (index < 0) {
      return -1
    }

    if (!this.head && index > 0) {
      return
    }

    if (!this.head) {
      this.head = new LinkedList(val)
      return
    }

    if (index === 0) {
      const node = new LinkedList(val)
      node.next = this.head
      this.head = node
      return
    }

    let i = 0
    let cur = this.head
    while (i < index - 1) {
      if (cur && cur.next) {
        cur = cur.next
        i++
      } else {
        return
      }
    }

    const node = new LinkedList(val)
    if (cur && !cur.next) {
      // if cur is the last node, attach new node at the end of the list
      cur.next = node
      return
    }
    node.next = cur.next
    cur.next = node
  }

  addAtTail(val) {
    if (!this.head) {
      this.addAtHead(val)
      return
    }

    let cur = this.head
    while (cur.next) {
      cur = cur.next
    }
    const node = new LinkedList(val)
    cur.next = node
  }

  deleteAtIndex(index) {
    if (index < 0) {
      return -1
    }

    if (!this.head) {
      return
    }

    let cur = this.head

    let i = 0
    while (i < index - 1) {
      if (cur && cur.next) {
        cur = cur.next
        i++
      } else {
        break
      }
    }

    if (index == 0) {
      // head
      this.head = this.head.next
    }

    if (cur.next && cur.next.next) {
      // not tail
      cur.next = cur.next.next
    } else {
      // tail
      cur.next = null
    }
  }
}

module.exports = LinkedList

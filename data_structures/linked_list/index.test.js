const { describe, it, beforeEach, expect } = require('@jest/globals')
const LinkedList = require('.')

describe('Test my linked_list', () => {
  beforeEach(() => {})

  describe('Test addAtHead', () => {
    it('Adds at head correctly to an empty list', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      expect(list.head).toEqual({ val: 1, next: null })
    })

    it('Adds at head correctly to a non-empty list', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      list.addAtHead(2)
      expect(list.head).toEqual({ val: 2, next: { val: 1, next: null } })
    })
  })

  describe('Test get', () => {
    it('Gets the first item in the list, which is the head', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      expect(list.get(0)).toBe(1)
    })

    it('Gets the third item in the list', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      list.addAtHead(2)
      list.addAtHead(3)
      expect(list.get(2)).toBe(1)
    })

    it('Gets the second item in the list', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      list.addAtHead(2)
      list.addAtHead(3)
      expect(list.get(1)).toBe(2)
    })

    it('Returns -1 if index is a negative integer', () => {
      const list = new LinkedList()
      expect(list.get(-1)).toBe(-1)
    })

    it('Returns -1 if index exceeds length of the list', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      expect(list.get(3)).toBe(-1)
    })
  })

  describe('Test addAtIndex', () => {
    it('Returns -1 if the index is a negative integer', () => {
      const list = new LinkedList()
      expect(list.addAtIndex(-1, 3)).toBe(-1)
    })

    it('If the list is empty, add new node as head', () => {
      const list = new LinkedList()
      list.addAtIndex(0, 1)
      expect(list.head).toEqual({ val: 1, next: null })
    })

    it('If index is 0, add new node as head', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      list.addAtIndex(0, 2)
      expect(list.head).toEqual({ val: 2, next: { val: 1, next: null } })
    })

    it('A new node is inserted before the second node', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      list.addAtHead(2)
      list.addAtIndex(1, 3) // 2->3->1
      expect(list.head).toEqual({
        val: 2,
        next: { val: 3, next: { val: 1, next: null } },
      })
    })

    it('If index is equal to the length of the list, add new node at the end of the list', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      list.addAtIndex(1, 2)
      expect(list.head).toEqual({ val: 1, next: { val: 2, next: null } })
    })

    it('Add a new node before the third node', () => {
      const list = new LinkedList()
      list.addAtHead(3)
      list.addAtHead(2)
      list.addAtHead(1)
      list.addAtIndex(2, 4) // 1->2->4->3
      expect(list.head).toEqual({
        val: 1,
        next: { val: 2, next: { val: 4, next: { val: 3, next: null } } },
      })
    })

    it('Do nothing if index is greater than the length of the list', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      list.addAtIndex(3, 2)
      expect(list.head).toEqual({ val: 1, next: null })
    })
  })

  describe('Test addAtTail', () => {
    it('If the list is empty, addAtTail is the same as addAtHead', () => {
      const list1 = new LinkedList()
      const list2 = new LinkedList()
      list1.addAtHead(1)
      list2.addAtTail(1)
      expect(list1.head).toEqual(list2.head)
    })

    it('If the list is not empty, addAtTail adds a new node at the end of the list', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      list.addAtHead(2)
      list.addAtTail(3)
      expect(list.head).toEqual({
        val: 2,
        next: { val: 1, next: { val: 3, next: null } },
      })
    })
  })

  describe('Test deleteAtIndex', () => {
    it('If the index is a negative integer return -1', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      expect(list.deleteAtIndex(-1)).toBe(-1)
    })

    it('If the list is empty, do nothing', () => {
      const list = new LinkedList()
      expect(list.deleteAtIndex(3)).toBeUndefined()
    })

    it('If the index is larger than the length of the list, do nothing', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      expect(list.deleteAtIndex(3)).toBeUndefined()
    })

    it('If the index is equal to the (length - 1) of the list, remove the last node of the list', () => {
      const list = new LinkedList()
      list.addAtHead(2)
      list.addAtHead(1)
      list.deleteAtIndex(1)
      expect(list.head).toEqual({ val: 1, next: null })
    })

    it('Remove the node at first index', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      list.addAtHead(2)
      list.deleteAtIndex(1)
      expect(list.head).toEqual({ val: 2, next: null })
    })

    it('Nothing should happen when index is equal to the length of the list', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      list.deleteAtIndex(1)
      expect(list.head).toEqual({ val: 1, next: null })
    })

    it('Remove the node at second index, which is the last node', () => {
      const list = new LinkedList()
      list.addAtHead(3)
      list.addAtHead(2)
      list.addAtHead(1)
      list.deleteAtIndex(2) // 1->2
      expect(list.head).toEqual({ val: 1, next: { val: 2, next: null } })
    })

    it('Remove the node at the second index', () => {
      const list = new LinkedList()
      list.addAtHead(4)
      list.addAtHead(3)
      list.addAtHead(2)
      list.addAtHead(1)
      list.deleteAtIndex(2) // 1->2->4
      expect(list.head).toEqual({
        val: 1,
        next: { val: 2, next: { val: 4, next: null } },
      })
    })

    it('If length of the list is 1, the list should become empty', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      list.deleteAtIndex(0)
      expect(list.head).toBe(null)
    })
  })

  describe('Some more tests', () => {
    it('leetcode 1', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      list.addAtTail(3)
      list.addAtIndex(1, 2)
      expect(list.get(1)).toBe(2)
      list.deleteAtIndex(0)
      expect(list.get(0)).toBe(2)
    })

    it('leetcode 2', () => {
      const list = new LinkedList()
      list.addAtHead(2)
      list.deleteAtIndex(1)
      list.addAtHead(2)
      list.addAtHead(7)
      list.addAtHead(3)
      list.addAtHead(2)
      list.addAtHead(5)
      list.addAtTail(5) // 5-2-3-7-2-2-5
      expect(list.get(5)).toBe(2)
      list.deleteAtIndex(6)
      list.deleteAtIndex(4)
    })

    it('leetcode 3', () => {
      const list = new LinkedList()
      list.addAtHead(0)
      list.addAtIndex(1, 1)
      expect(list.get(2)).toBe(-1)
      list.addAtHead(4)
      expect(list.get(2)).toBe(1)
      list.addAtHead(4) // 4-4-0-1
      expect(list.get(2)).toBe(0)
      list.get(3)
      list.addAtIndex(1, 6)
      list.addAtTail(1)
      list.addAtHead(0)
    })

    it('leetcode 4', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      list.addAtTail(3)
      list.addAtIndex(1, 2)
      list.get(1)
      list.deleteAtIndex(1)
      list.get(1)
      list.get(3)
      list.deleteAtIndex(3)
      list.deleteAtIndex(0)
      list.get(0)
      list.deleteAtIndex(0)
      list.get(0)
    })

    it('leetcode 5', () => {
      const list = new LinkedList()
      list.addAtHead(1)
      list.addAtTail(3)
      list.addAtIndex(1, 2)
      list.get(1)
      list.deleteAtIndex(1)
      list.get(1)
      list.get(3)
      list.deleteAtIndex(3)
      list.deleteAtIndex(0)
      list.get(0)
      list.deleteAtIndex(0)
      console.log(list.head)
      expect(list.get(0)).toBe(-1)
    })
  })
})

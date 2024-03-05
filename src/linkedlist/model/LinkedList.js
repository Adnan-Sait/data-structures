import Node from "./Node.js";

/**
 * @template T Type of data stored.
 */
export default class LinkedList {
  /**
   * @type {Node<T> | undefined}
   */
  head;
  /**
   * @type {number}
   */
  length;

  /**
   * @template T
   * @param {Node<T>} head
   * @returns {number}
   *
   * Time Complexity: O(n), θ(n)
   */
  static getLength(head) {
    let length = 0;
    /**
     * @type {Node<T> | undefined}
     */
    let node = head;
    while (node) {
      length += 1;
      node = node.next;
    }

    return length;
  }

  /**
   * @template T
   * @param {Array<T>} array
   * @returns {LinkedList<T>}
   *
   * Time Complexity: O(2n), θ(2n)
   * Iterates over the array, and then iterates over the linked list to compute length.
   */
  static build(array) {
    if (array.length === 0) {
      return new LinkedList();
    }

    const headNode = new Node(array[0]);
    let prevNode = headNode;
    for (let index = 1; index < array.length; index++) {
      const node = new Node(array[index]);
      prevNode.next = node;

      prevNode = node;
    }

    return new LinkedList(headNode);
  }

  /**
   * @param {Node<T>} [head]
   */
  constructor(head) {
    this.head = head;
    this.length = head ? LinkedList.getLength(head) : 0;
  }

  /**
   * Time Complexity: O(n), θ(n)
   */
  printValues() {
    /**
     * @type {Node<T> | undefined}
     */
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

  /**
   * @param {number} index Positive Index starting from '0'
   * @returns {Node<T> | null}
   *
   * Time Complexity: O(n), θ(k)
   * Iterations depend on index value passed. `k` is the average of the indexes passed.
   */
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let currentIndex = 0;
    if (!this.head) return null;

    let node = this.head;
    while (currentIndex !== index) {
      if (!node.next) return null;
      node = node.next;
      currentIndex += 1;
    }

    return node;
  }

  /**
   *
   * @param {number} index
   * @param {T} value
   * @returns {number}
   *
   * Time Complexity: O(n), θ(k)
   * Uses the get method to find the node.
   */
  setAt(index, value) {
    const node = this.get(index);
    if (!node) return -1;

    node.value = value;
    return index;
  }

  /**
   *
   * @param {number} index
   * @param {T} value
   * @returns {number}
   *
   * Time Complexity: O(2n), θ(2n)
   * Uses the get method to find the node.
   * Iterates over the linked list a 2nd time to compute length
   */
  insertAt(index, value) {
    // If the index is out of bounds, insert the element at the beginning or the end.
    if (index >= this.length) {
      index = this.length;
    } else if (index < 0) {
      index = 0;
    }

    const prevNode = this.get(index - 1);
    const newNode = new Node(value);
    if (prevNode) {
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    if (this.head) this.length = LinkedList.getLength(this.head);

    return this.length;
  }

  /**
   *
   * @param {number} index
   * @returns {number}
   *
   * Time Complexity: O(2n), θ(2n)
   * Uses the get method to find the node.
   * Iterates over the linked list a 2nd time to compute length
   */
  deleteAt(index) {
    if (index < 0 || index >= this.length) {
      return -1;
    }

    const prevNode = this.get(index - 1);
    if (prevNode) {
      const nextNode = prevNode.next?.next;
      prevNode.next = nextNode;
    } else {
      this.head = this.head?.next;
    }

    this.length = this.head ? LinkedList.getLength(this.head) : 0;

    return this.length;
  }
}

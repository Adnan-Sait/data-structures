/**
 * @template T Type of data stored
 */
export default class Node {
  /**
   * @type {T}
   */
  value;
  /**
   * @type {Node<T> | undefined}
   */
  next;

  /**
   * @param {T} value
   * @param {Node<T>} [next]
   */
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

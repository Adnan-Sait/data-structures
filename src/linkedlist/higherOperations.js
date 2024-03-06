import LinkedList from "./model/LinkedList.js";
import Node from "./model/Node.js";

/**
 *
 * @template T
 * @param {LinkedList<T>} list
 * @param {number} k
 * @returns {LinkedList<T>}
 *
 * Time Complexity: O(n), θ(n)
 */
export function reverseLastKNodes(list, k) {
  if (k > list.length || !list.head) return list;

  if (k === list.length) {
    const newHead = reverseHeadNode(list.head);
    list.head = newHead;
    return list;
  }

  const listSize = list.length;
  let node = list.head;
  let index = 0;
  let baseNode = node;
  // Identify the node after which the values need to be reversed.
  while (node?.next) {
    if (index === listSize - k - 1) {
      baseNode = node;
      break;
    }
    index += 1;
    node = node.next;
  }

  if (!baseNode.next) return list;

  const nextNode = reverseHeadNode(baseNode.next);
  baseNode.next = nextNode;

  return list;
}

/**
 *
 * @template T
 * @param {Node<T>} head
 * @returns {Node<T>}
 *
 * Time Complexity: O(n), θ(n)
 */
export function reverseHeadNode(head) {
  let prevNode = head;
  let currentNode = head.next;

  while (currentNode) {
    const nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  head.next = undefined;

  return prevNode;
}

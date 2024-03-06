import { reverseLastKNodes, reverseHeadNode } from "./higherOperations.js";
import LinkedList from "./model/LinkedList.js";

function main() {
  const val = LinkedList.build([1, 2, 3]);
  if (!val.head) return;

  console.log("Length: ", val.length);
  val.printValues();
  console.log("Item at index: ", val.get(2));
  console.log("Inserting item at index: ", val.setAt(2, 100));
  console.log("Item at index after update: ", val.get(1));
  console.log("Insert Item at index. Updated Length: ", val.insertAt(2, 200));
  console.log("Head after insert: ", JSON.stringify(val.head));
  console.log("Delete Item at index. Updated Length: ", val.deleteAt(2));
  console.log("Head after delete: ", JSON.stringify(val.head));
  const newHead = reverseHeadNode(val.head);
  val.head = newHead;
  console.log("Reversed linked list: ", val);
  console.log("Reversed k nodes: ", JSON.stringify(reverseLastKNodes(val, 3)));
}

main();

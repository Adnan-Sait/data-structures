import LinkedList from "./model/LinkedList.js";

const val = LinkedList.build([1, 2, 3]);
console.log("Length: ", val.length);
val.printValues();
console.log("Item at index: ", val.get(2));
console.log("Inserting item at index: ", val.setAt(2, 100));
console.log("Item at index after update: ", val.get(1));
console.log("Insert Item at index. Updated Length: ", val.insertAt(2, 200));
console.log("Head after insert: ", JSON.stringify(val.head));
console.log("Delete Item at index. Updated Length: ", val.deleteAt(2));
console.log("Head after delete: ", JSON.stringify(val.head));

let primernombre = Symbol();
let segundonombre = Symbol();
let userID = Symbol.for("userID");
let objeto = {};
let persona = { [segundonombre]: "Daniel"}

persona[primernombre] = "Kevin";

console.log (persona[primernombre]);
console.log (persona[segundonombre]);

objeto[userID] = "12345";

console.log(objeto[userID]);
console.log(userID);

let userID2 = Symbol.for("userID");

console.log(objeto[userID2]);
console.log(userID2);


let id = Symbol.for("id unico");
console.log(Symbol.keyFor(id));

let id2 = Symbol.for("id unico");
console.log(Symbol.keyFor(id2));

let id3 = Symbol("id unico");
console.log(Symbol.keyFor(id3));




















































































































































// const ids = new Set([1, 2, 3]);
// ids.add(2);
//
// for (const entry of ids.entries()) {
//     console.log(entry);
// }
//
// const ids = new Set(["HI", "from", "set"]);
// if (ids.has("HI")) {
//     ids.delete("HI");
// }
//
// for (const entry of ids.entries()) {
//     console.log(entry[0]);
// }
//
// // -----------------------------------------------------------------
// const person1 = {name: "Max"};
// const person2 = {name: "Manuel"};
//
// const personData = new Map([[person1, [{date: "yesterday", price: 10}]]]);
// personData.set(person2, [{date: "two weeks ago", price: 100}]);
//
// console.log((personData));
// console.log(personData.get(person1));
//
// for (const entry of personData.entries()) {
//     console.log(entry);
// }
//
// for (const [key, value] of personData.entries()) {
//     console.log(key, value);
// }
//
// for (const key of personData.keys()) {
//     console.log(key);
// }
//
// console.log(personData.size);
//
// // -----------------------------------------------------------------
// let person = {name: "Max"};
// const persons = new WeakSet();
// persons.add(person);
//
// person = null;
// console.log(persons);

// -----------------------------------------------------------------
let person = {name: "Max"};
const personData = new WeakMap();
personData.set(person, "Extra info!");

person = null;
console.log(personData);

// const numbers = [1, 2, 3];
// console.log(numbers); // -> [1, 2, 3]

// const moreNumbers = new Array(5); 
// const moreNumbers = Array(5); 
// console.log(moreNumbers); // -> [empty × 5]

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers); // -> [1, 2]

// const moreNumbers = Array.from(1, 2);
// console.log(moreNumbers); // -> Uncaught TypeError: number 2 is not a function

// const moreNumbers = Array.from('Hi!');
// console.log(moreNumbers); // -> ['H', 'i', '!']

// const listItems = document.querySelectorAll('li');
// console.log(listItems); // -> NodeList(3) [li, li, li]

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems); // -> [li, li, li]

// const hobbies = ['Cooking', 'Sports'];
// const presonalData = [30, 'Max', {moreDetail: {}}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//     for (const dataPoints of data) {
//         console.log(dataPoints); // -> 1 / 1.6 / -5.4 / 2.1
//     }
// }

// console.log(presonalData[1]); // -> Max

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');// -> ['Sports', 'Cooking', 'Reading']
// hobbies.unshift('Coding')// -> ['Coding', 'Sports', 'Cooking', 'Reading']
// const poppedValue = hobbies.pop(); // -> ['Coding', 'Sports', 'Cooking']
// hobbies.shift(); // -> ['Sports', 'Cooking']
// console.log(hobbies);

// hobbies[1] = 'Game'; // -> ['Sports', 'Game']
// hobbies[5] = 'Reading'; // -> ['Sports', 'Game', empty × 3, 'Reading'],  Rarely used
// console.log(hobbies, hobbies[4]) // -> ['Sports', 'Game', empty × 3, 'Reading'] undefined

// hobbies.splice(0, 0, 'Good Food'); // -> ['Good Food', 'Sports', 'Game']
// console.log(hobbies);

// hobbies.splice(1, 0, 'Good Food'); // -> ['Sports', 'Good Food', 'Game']
// console.log(hobbies);

// hobbies.splice(0, 1); // -> ['Good Food', 'Game']
// console.log(hobbies);

// const removedElements = hobbies.splice(0); // -> []
// console.log(hobbies);

// hobbies.splice(-2, 1); // -> ['Sports', 'Game']
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10]; 
// const storedResults = testResults;
// testResults.push(5.91);
// console.log(storedResults, testResults); // -> (7) [1, 5.3, 1.5, 10.99, -5, 10, 5.91] (7) [1, 5.3, 1.5, 10.99, -5, 10, 5.91]

// const storedResults = testResults.slice();
// testResults.push(5.91);
// console.log(storedResults, testResults); // -> [1, 5.3, 1.5, 10.99, -5, 10] (7) [1, 5.3, 1.5, 10.99, -5, 10, 5.91]

// const storedResults = testResults.slice(0, 2);
// testResults.push(5.91);
// console.log(storedResults, testResults); // -> (2) [1, 5.3] (7) [1, 5.3, 1.5, 10.99, -5, 10, 5.91]

// const storedResults = testResults.slice(-3, -1);
// testResults.push(5.91);
// console.log(storedResults, testResults); // -> (2) [10.99, -5] (7) [1, 5.3, 1.5, 10.99, -5, 10, 5.91]

// const storedResults = testResults.slice(2);
// testResults.push(5.91);
// console.log(storedResults, testResults); // -> (4) [1.5, 10.99, -5, 10] (7) [1, 5.3, 1.5, 10.99, -5, 10, 5.91]

// const storedResults = testResults.concat([3.99, 2]);
// testResults.push(5.91);
// console.log(storedResults, testResults); // -> (8) [1, 5.3, 1.5, 10.99, -5, 10, 3.99, 2] (7) [1, 5.3, 1.5, 10.99, -5, 10, 5.91]

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10]; 
// console.log(testResults.indexOf(1.5)); // -> 2
// console.log(testResults.lastIndexOf(1.5)); // -> 4

// const personData = [{name: 'max'}, {name: 'Manuel'}];
// console.log(personData.indexOf({name: 'Manuel'})); // -> -1 == not find

// const manuel = personData.find(function(person, idx, persons) {
//     return person.name === 'Manuel';
// });
// console.log(manuel); // -> {name: 'Manuel'}

// manuel.name = 'Anna';
// console.log(manuel, personData); // -> {name: 'Anna'} (2) [{…}, {…}]

// console.log(testResults.includes(10.99)); // -> true

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustPrices = [];
// for (const price of prices) {
//     taxAdjustPrices.push(price * (1 + tax));
// }
// console.log(taxAdjustPrices); // -> (4) [13.0781, 7.1281, 4.7481, 7.842099999999999]

// prices.forEach(function(price, idx, prices) {
//     const priceObj = {index:idx, taxAdjustPrice:price * (1 + tax)};
//     taxAdjustPrices.push(priceObj);
// });
// console.log(taxAdjustPrices); // -> (4) [{…}, {…}, {…}, {…}]

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustPrices = prices.map(function(price, idx, prices) {
//     const priceObj = {index:idx, taxAdjustPrice:price * (1 + tax)};
//     return priceObj;
// });
// console.log(taxAdjustPrices); // -> (4) [{…}, {…}, {…}, {…}]

// const sortedPrices = prices.sort();
// console.log(sortedPrices); // -> (4) [10.99, 3.99, 5.99, 6.59]

// const sortedPrices = prices.sort(function(a, b) {
//     if (a > b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1;
//     }
// });
// console.log(sortedPrices); // -> (4) [3.99, 5.99, 6.59, 10.99]
// console.log(sortedPrices.reverse()); // -> (4) [10.99, 6.59, 5.99, 3.99]

// const filteredArray = prices.filter(function(price, index, prices) {
//     return price > 6;
// });
// console.log(filteredArray); // -> (2) [10.99, 6.59]

// const filteredArray = prices.filter(p => p > 6);
// console.log(filteredArray); // -> (2) [10.99, 6.59]

// let sum = 0;

// prices.forEach(p => sum += p);
// console.log(sum); // -> 27.56

// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
// console.log(sum); // -> 27.56

// method chain
// const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
// const transformedArray = originalArray.map(obj => obj.price); 
// const sum = transformedArray.reduce((sumVal, curVal) => sumVal + curVal, 0);

// const sum = originalArray.reduce((sumVal, curVal) => sumVal + curVal.price, 0); // => 46.97

// const sum = originalArray.map(obj => obj.price)
//     .reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97

// const data = 'new york;10.99;2000';

// const tranformedData = data.split(';');
// console.log(tranformedData); // -> (3) ['new york', '10.99', '2000']

// const nameFragments = ['Max', 'Schwarz'];
// // const name = nameFragements.join();
// // console.log(name); // -> Max,Schwarz

// const names = nameFragments.join(' ');
// console.log(names); // -> Max Schwarz

// const copiedNameFragments = [...nameFragments];
// nameFragments.push('Mr');
// console.log(nameFragments, copiedNameFragments); // -> (3) ['Max', 'Schwarz', 'Mr'] (2) ['Max', 'Schwarz']

// console.log(Math.min(1, 5, -3)); // -> -3
// console.log(Math.min(prices)); // -> NaN
// console.log(Math.min(...prices)); // -> 3.99

// const persons = [{name: 'Max', age:30},  {name: 'Manuel', age:31}];
// const copiedPersons = [...persons];

// persons.push({name:'anna', age:29});
// persons[0].age = 31;

// console.log(persons, copiedPersons); // -> (3) [0:{name: 'Max', age: 31}, 1:{name: 'Manuel', age: 31}, 2:{name: 'anna', age: 29}] (2) [{…}, {…}]

// const copiedPersons = [...persons.map(person => ({name: person.neme, age:person.age}))];

// persons.push({name:'anna', age:29});
// persons[0].age = 31;

// console.log(persons, copiedPersons); // -> (3) [0:{name: 'Max', age: 31}, 1:{name: 'Manuel', age: 31}, 2:{name: 'anna', age: 29}] (2) [{…}, {…}]

// const nameData = ['Max', 'Schwarz', 'Mr', 30];
// const firstName = nameData[0];
// const lastName = nameData[1];

// const [firstName, LastName] = nameData; // -> Max Schwarz
// console.log(firstName, LastName, otherInformation);

// const [firstName, LastName, otherInformation] = nameData; // -> Max Schwarz Mr
// console.log(firstName, LastName, otherInformation);

// const [firstName, LastName, ...otherInformation] = nameData; // -> Max Schwarz (2) ['Mr', 30]
// console.log(firstName, LastName, otherInformation);


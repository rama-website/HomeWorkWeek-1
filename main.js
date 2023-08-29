//ex1-giveCompliment
// 'use strict';

// function giveCompliment(name) {
//   const compliments = [
//     'great',
//     'awesome',
//     'amazing',
//     'fantastic',
//     'superb',
//     'excellent',
//     'outstanding',
//     'wonderful',
//     'impressive',
//     'stellar'
//   ];

//   const randomIndex = Math.floor(Math.random() * compliments.length);
//   const compliment = compliments[randomIndex];

//   return `You are ${compliment}, ${name}!`;
// }

// function main() {
//   const myName = 'HackYourFuture';

//   console.log(giveCompliment(myName));
//   console.log(giveCompliment(myName));
//   console.log(giveCompliment(myName));

//   const yourName = 'Amsterdam';

//   console.log(giveCompliment(yourName));
//   console.log(giveCompliment(yourName));
//   console.log(giveCompliment(yourName));
// }

// if (process.env.NODE_ENV !== 'test') {
//   main();
// }

//ex2-dogYears
// 'use strict';

// function calculateDogAge(age) {
//   const dogYears = age * 7; // Conversion rate: 1 human year to 7 dog years
//   return `Your doggie is ${dogYears} years old in dog years!`;
// }

// function main() {
//   console.log(calculateDogAge(1)); // -> "Your doggie is 7 years old in dog years!"
//   console.log(calculateDogAge(2)); // -> "Your doggie is 14 years old in dog years!"
//   console.log(calculateDogAge(3)); // -> "Your doggie is 21 years old in dog years!"
// }

// if (process.env.NODE_ENV !== 'test') {
//   main();
// // }
// module.exports = calculateDogAge;


// ex3-tellFortune
// 'use strict';

// This function should take an array as its parameter and return
// a randomly selected element as its return value.
// function selectRandomly(array) {
//   const randomIndex = Math.floor(Math.random() * array.length);
//   return array[randomIndex];
// }

// function tellFortune(numKids, partnerNames, locations, jobTitles) {
//   const selectedNumKids = selectRandomly(numKids);
//   const selectedPartnerName = selectRandomly(partnerNames);
//   const selectedLocation = selectRandomly(locations);
//   const selectedJobTitle = selectRandomly(jobTitles);

//   return `You will be a ${selectedJobTitle} in ${selectedLocation}, married to ${selectedPartnerName} with ${selectedNumKids} kids.`;
// }

// function main() {
//   const numKids = [
//     'no',
//     'one',
//     'two',
//     'three',
//     'four'
//   ];

//   const partnerNames = [
//     'Alice',
//     'Bob',
//     'Charlie',
//     'Daisy',
//     'Eva'
//   ];

//   const locations = [
//     'New York',
//     'Paris',
//     'Tokyo',
//     'London',
//     'Sydney'
//   ];

//   const jobTitles = [
//     'developer',
//     'teacher',
//     'designer',
//     'scientist',
//     'chef'
//   ];

//   console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
//   console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
//   console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
// }

// if (process.env.NODE_ENV !== 'test') {
//   main();
// }
// module.exports = tellFortune;

// ex4-shoppingCart
// 'use strict';

// const shoppingCart = ['bananas', 'milk'];

// function addToShoppingCart(item) {
//   shoppingCart.push(item);

//   if (shoppingCart.length > 3) {
//     shoppingCart.shift();
//   }

//   return `You bought ${shoppingCart.join(', ')}!`;
// }

// function test1() {
//   console.log(
//     'Test 1: addToShoppingCart() called without an argument should leave the shopping cart unchanged'
//   );
//   const expected = 'You bought bananas, milk!';
//   const actual = addToShoppingCart();
//   console.assert(actual === expected);
// }

// function test2() {
//   console.log('Test 2: addToShoppingCart() should take one parameter');
//   const expected = 1;
//   const actual = addToShoppingCart.length;
//   console.assert(actual === expected);
// }

// function test3() {
//   console.log('Test 3: `chocolate` should be added');
//   const expected = 'You bought bananas, milk, chocolate!';
//   const actual = addToShoppingCart('chocolate');
//   console.assert(actual === expected);
// }

// function test4() {
//   console.log('Test 4: `waffles` should be added and `bananas` removed');
//   const expected = 'You bought milk, chocolate, waffles!';
//   const actual = addToShoppingCart('waffles');
//   console.assert(actual === expected);
// }

// function test5() {
//   console.log('Test 5: `tea` should be added and `milk` removed');
//   const expected = 'You bought chocolate, waffles, tea!';
//   const actual = addToShoppingCart('tea');
//   console.assert(actual === expected);
// }

// function test() {
//   test1();
//   test2();
//   test3();
//   test4();
//   test5();
// }

// test();

// ex5-shoppingCartPure
// 'use strict';

// // Function under test
// function addToShoppingCart(shoppingCart, item) {
//   const newCart = [...shoppingCart, item];

//   if (newCart.length > 3) {
//     newCart.shift();
//   }

//   return newCart;
// }

// // Test functions (plain vanilla JavaScript)
// function test1() {
//   console.log('Test 1: addToShoppingCart should take two parameters');
//   console.assert(addToShoppingCart.length === 2);
// }

// function test2() {
//   console.log('Test 2: addToShoppingCart should be a pure function');
//   const initialCart = ['bananas', 'milk'];
//   const result1 = addToShoppingCart(initialCart, 'chocolate');
//   const result2 = addToShoppingCart(initialCart, 'chocolate');
//   console.assert(JSON.stringify(result1) === JSON.stringify(result2));
//   console.assert(
//     JSON.stringify(initialCart) === JSON.stringify(['bananas', 'milk'])
//   );
// }

// function test3() {
//   console.log('Test 3: `chocolate` should be added');
//   const initialCart = ['bananas', 'milk'];
//   const result = addToShoppingCart(initialCart, 'chocolate');
//   console.assert(result.length === 3);
//   console.assert(result.includes('chocolate'));
// }

// function test4() {
//   console.log('Test 4: `waffles` should be added');
//   const initialCart = ['bananas', 'milk', 'chocolate'];
//   const result = addToShoppingCart(initialCart, 'waffles');
//   console.assert(result.length === 3);
//   console.assert(result.includes('waffles'));
// }

// function test() {
//   test1();
//   test2();
//   test3();
//   test4();
// }

// test();

// ex6-totalCost
// 'use strict';

// const cartForParty = {
//   beers: 1.75,
//   chips: 0.99,
//   soda: 2.5,
//   pizza: 7.0,
//   cake: 12.99
// };

// function calculateTotalPrice(cart) {
//   let totalPrice = 0;

//   for (const item in cart) {
//     if (typeof cart[item] === 'number') {
//       totalPrice += cart[item];
//     }
//   }

//   return `Total: €${totalPrice.toFixed(2)}`;
// }

// // Test functions (plain vanilla JavaScript)
// function test1() {
//   console.log('\nTest 1: calculateTotalPrice should take one parameter');
//   const expected = 1;
//   const actual = calculateTotalPrice.length;
//   console.assert(actual === expected);
// }

// function test2() {
//   console.log('\nTest 2: return correct output when passed cartForParty');
//   const expected = 'Total: €25.23';
//   const actual = calculateTotalPrice(cartForParty);
//   console.assert(actual === expected);
// }

// test1();
// test2();

//ex7-mindPrivacy
// 'use strict';

// const employeeRecords = [
//   {
//     name: 'John',
//     occupation: 'developer',
//     gender: 'M',
//     email: 'john.doe@somewhere.net',
//     salary: 50000,
//   },
//   {
//     name: 'Jane',
//     occupation: 'manager',
//     gender: 'F',
//     email: 'jane.eyre@somewhere.net',
//     salary: 60000,
//   },
// ];

// // Function under test
// function filterPrivateData(employeeArray) {
//   const filteredRecords = employeeArray.map(({ name, occupation, email }) => ({
//     name,
//     occupation,
//     email,
//   }));

//   return filteredRecords;
// }

// // Test functions (plain vanilla JavaScript)
// function test1() {
//   console.log('Test 1: filterPrivateData should take one parameter');
//   console.assert(filterPrivateData.length === 1);
// }

// function test2() {
//   console.log('Test 2: gender and salary should be filtered out');
//   const expected = [
//     {
//       name: 'John',
//       occupation: 'developer',
//       email: 'john.doe@somewhere.net',
//     },
//     {
//       name: 'Jane',
//       occupation: 'manager',
//       email: 'jane.eyre@somewhere.net',
//     },
//   ];
//   const result = filterPrivateData(employeeRecords);
//   console.assert(JSON.stringify(result) === JSON.stringify(expected));
// }

// function test() {
//   test1();
//   test2();
// }

// test();



//1-sum-entries
const list = [1721, 979, 366, 299, 675, 1456];
let result;

// Loop through the list to find two numbers that add up to 2020
for (let i = 0; i < list.length; i++) {
  for (let j = i + 1; j < list.length; j++) {
    if (list[i] + list[j] === 2020) {
      result = list[i] * list[j];
      break; // Stop searching once a valid pair is found
    }
  }
}

// TEST CODE, do not change
console.assert(result === 514579, `The result is not correct, it is ${result}, but should be 514579`);


//2-sum-three-entries
// const list = [1721, 979, 366, 299, 675, 1456];
// let result;

// // Loop through the list to find three numbers that add up to 2020
// for (let i = 0; i < list.length; i++) {
//   for (let j = i + 1; j < list.length; j++) {
//     for (let k = j + 1; k < list.length; k++) {
//       if (list[i] + list[j] + list[k] === 2020) {
//         result = list[i] * list[j] * list[k];
//         break; // Stop searching once a valid triplet is found
//       }
//     }
//   }
// }

// // TEST CODE, do not change
// console.assert(result === 241861950, `The result is not correct, it is ${result}, but should be 241861950`);

//3-password-validation
// const passwordList = [
//     { times: '1-3', letter: 'a', password: 'abcde' },
//     { times: '1-3', letter: 'b', password: 'cdefg' },
//     { times: '2-9', letter: 'c', password: 'ccccccccc' }
//   ];
  
//   function isPasswordValid(policy) {
//     const [min, max] = policy.times.split('-').map(Number);
//     const letterToCount = policy.letter;
//     const password = policy.password;
  
//     const letterCount = password.split('').filter((char) => char === letterToCount).length;
  
//     return letterCount >= min && letterCount <= max;
//   }
  
//   for (const policy of passwordList) {
//     const isValid = isPasswordValid(policy);
  
//     const status = isValid ? 'VALID' : 'INVALID';
  
//     console.log(`'${policy.password}' is ${status}, ${policy.letter} is present ${policy.password.split(policy.letter).length - 1} times and should have been present at least ${policy.times.split('-')[0]} and at most ${policy.times.split('-')[1]} times`);
//   }
  

//4-bank-account
// const bankAccount = {
//     currentBalance: 250,
//     transactions: [
//       {
//         prevAmount: 350,
//         newAmount: 250,
//         reason: "Donation",
//       },
//     ],
//   };
  
//   const donateMoney = (amount, onSuccess, onFail) => {
//     if (amount <= bankAccount.currentBalance) {
//       bankAccount.currentBalance -= amount;
//       bankAccount.transactions.push({
//         prevAmount: bankAccount.currentBalance + amount,
//         newAmount: bankAccount.currentBalance,
//         reason: "Donation",
//       });
//       onSuccess();
//     } else {
//       onFail();
//     }
//   };
  
//   const payRent = (amount, onSuccess, onFail) => {
//     if (amount <= bankAccount.currentBalance) {
//       bankAccount.currentBalance -= amount;
//       bankAccount.transactions.push({
//         prevAmount: bankAccount.currentBalance + amount,
//         newAmount: bankAccount.currentBalance,
//         reason: "Rent",
//       });
//       onSuccess();
//     } else {
//       onFail();
//     }
//   };
  
//   const onSuccessEnglish = () => {
//     console.log("Payment successful! Thank you!");
//   };
//   const onFailEnglish = () => {
//     console.log("You do not have enough money to make this payment.");
//   };
  
//   donateMoney(100, onSuccessEnglish, onFailEnglish);
//   console.log(bankAccount);
  
//   payRent(100, onSuccessEnglish, onFailEnglish);
//   console.log(bankAccount);
  
//   donateMoney(100, onSuccessDutch, onFailDutch);
//   console.log(bankAccount);
  
//   function onSuccessDutch() {
//     console.log("Betaling geslaagd! Dank u!");
//   }
  
//   function onFailDutch() {
//     console.log("U heeft niet voldoende saldo om deze betaling te doen.");
//   }
  

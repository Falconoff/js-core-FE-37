// function getExtremeElements(array) {
//   // Change code below this line
//   let newArray = [];
//   // ------ 1 ----------
//   // console.log(array);
//   // newArray.push(array[0]);
//   // newArray.push(array[array.length - 1]);

//   // console.log(newArray);

//   // return newArray;

//   // ------- 2 ---------
//   // console.log(newArray.splice(0, 0, array[0], array[array.length - 1]));

//   newArray.splice(0, 0, array[0], array[array.length - 1])

//   return newArray;

//   // так не работает:
//   // return newArray.splice(0, 0 , array[0], array[array.length - 1]) 

//   // Change code above this line
// }
// getExtremeElements(["Earth", "Mars", "Venus"]);

// =========== 13 =====================
// function slugify(title) {
//   // Change code below this line
//   title = title.toLowerCase().split(' ').join('-');
//   console.log(title)
//   return title;
//   // Change code above this line
// }
// slugify("Arrays for begginers");

// ============ 16 =================
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   let newArray = [];
  
//   newArray = firstArray.concat(secondArray);
  
//   if (newArray.length > maxLength) {
//     newArray = newArray.slice(0, maxLength)
//   }

//   console.log(newArray);
//   return newArray;
//     // Change code above this line
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 5)


// =============== 18 ============================
// function calculateTotal(number) {
//   let total = 0;
  
//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }

//   console.log(total);
//   return total;
// }
// calculateTotal(1);

// ================ 21 =========================
// function findLongestWord(string) {
//   let maxLength = 0;
  
//   let array = string.split(' ');
//   console.log(array);

//   maxLength = array[0].length;
//   let longestWord = array[0];

//   console.log('maxLength_0 ', maxLength);
//   console.log('longestWord_0 ', longestWord);

//   for (const num of array) {
//     if (num.length > maxLength) {
//       maxLength = num.length;
//       longestWord = num;
//       console.log('maxLength ', maxLength);
//       console.log('longestWord ', longestWord);
//     }
//   }

//   console.log('maxLength_before_return ', maxLength);
//   console.log('longestWord_before_return ', longestWord);
//   return longestWord;
// }
// findLongestWord("May the force be with you somewhere");
// findLongestWord("Google do a roll");
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord()


// ================ 22 =========================
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i<=max; i+=1) {
//     numbers.push(i);
//   }
//   console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(1, 3);

// ============ 23 =========================
// function filterArray(numbers, value) {
//   let array = [];
//   for (let number of numbers) {
//     if (number > value) {
//       array.push(number);
//     }
//   }
//   console.log(array);
//   return array;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([12, 24, 8, 41, 76], 20);
// filterArray([1, 2, 3, 4, 5], 5)

// ================ 25 ====================
// function getCommonElements(array1, array2) {
//   let array = [];

//   for (const num of array1) {
//     if (array2.includes(num)) {
//       array.push(num)
//     }
//   }
//   console.log(array);
//   return array;
// }
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

// ================ 29 ======================
// function getEvenNumbers(start, end) {
//   let array = [];
  
//   for (let i = start; i <= end; i+=1) {
//     if (i % 2 === 0) {
//       array.push(i)
//     }
//   }

//   console.log(array);
//   return array;
// }
// getEvenNumbers(6, 12);

// ================= 32 =====================
// function includes(array, value) {
  
//   for (let item of array) {
//     if (item === value) {
//       return true
//     }
//   }
  
//   return false;
// }
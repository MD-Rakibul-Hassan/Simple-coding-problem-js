/* Simple coding problems */

// Problem 1 : Convert inch to fit
function convertingInchToFit (inch) {
      const convert = parseInt(inch / 12);
      const remingingConvert = inch % 12;
      return `Your hight is ${convert}.${remingingConvert} Inch`
}
const height = convertingInchToFit(72);
console.log(height);
// Problem 2 : Calculate average of odd number of an array 
const numbers = [1,2,3,4,5,6,7,8,9,10];
function calculateAverageOddNumbers (number) {
      let oddNumbers = [];
      let allNumber = 0;
      for (num of number) {
            if (num % 2 !== 0) {
                  oddNumbers.push(num);
            }
      }
      for (let i = 0; i < oddNumbers.length; i++) {
            allNumber += oddNumbers[i]  / oddNumbers.length;
      }
      return allNumber;
}
const averageOfOddNumber = calculateAverageOddNumbers(numbers);
console.log(averageOfOddNumber);
// Problem 3 : Remove duplicate items from an array 

const duplicate = ["Mango","Apple","Banna","Apple","Jackfrut","Mango"];
function removeDuplicate (array) {
      const duplicateRemove = array.filter ( (value,index,array) => {
            return array.indexOf(value) === index;
      })
      return duplicateRemove;
}
const duplicateRemoved = removeDuplicate(duplicate);
// Problem 3 :Another way to Remove duplicate items from an array 
const dublicateNumbers = [1,2,3,4,5,1,4,6,3,2,1,2,3,1,5,8];
function findDublicatNumbers (number) {
      const dublicates = [];
      for (let num of number) {
            if (dublicates.includes(num) === false) {
                  dublicates.push(num)
            }
      }
      return dublicates
}
const dublicateNumbersFind = findDublicatNumbers(dublicateNumbers);
console.log(dublicateNumbersFind);

// Problem 4 : Find max value in an array 
function findMax (array) {
      return Math.max(...array); 
}
const maxValue = findMax([10,20,30,90,150]);
console.log(maxValue);

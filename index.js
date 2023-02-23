//Prime number or not.

let numb = prompt("Enter a number:");
let result = isPrime(numb);
if (result == true) {
  console.log("Number is prime");
}
else {
  console.log("Number is not prime");
}

function isPrime(numb) {
  for (let i = 2; i < numb; i++) {
    if (numb % i == 0) {
      return false;
    }
    else {
      return true;
    }
  }
}

console.log("------------------------------");


//1)Write a program to print the first 10 numbers of the Fibonacci sequence.
0, 1, 1, 2, 3, 5, 8, 13, 21
const number = prompt("Enter a number for fibonacci:");

let n1 = 0, n2 = 1;
console.log(n1);
console.log(n2);

FibonacciFun(number);

function FibonacciFun(number) {
  for (let i = 0; i <= number - 3; i++) {
    n3 = n1 + n2;
    console.log(n3);
    n1 = n2;
    n2 = n3;

  }
}
console.log("------------------------------");

//Write a program to sort an array of objects by a specific property.
const persons = [
  {
    "name": "Vinod",
    "Age": 31,
    "Gender": "Male"
  },
  {
    "name": "Manisha",
    "Age": 28,
    "Gender": "Female"
  },
  {
    "name": "Appa",
    "Age": 32,
    "Gender": "Male"
  },

]

const SortPerson = persons.sort((a, b) => { return a.Age - b.Age; });
console.log(SortPerson);
console.log("------------------------------");


// console.log(persons);
// const SortPerson = persons.sort((p1, p2) => (p1.age > p2.age) ? 1 : (p2.age > p1.age)
//    ? -1:0);




const arrI = "india";
const arraI = arrI.split("");
const arrayI = new Set(arraI);
console.log(arrayI);


console.log("------------------------------");


//Sort a array element in array and show in reverse.

let arr = [10, 56, 23, 47, 96, 11];

let sortedArr = arr.sort((x, y) => x - y);
let reverseArr = sortedArr.reverse();
console.log(reverseArr);
console.log("------------------------------");

//3)Write a program to find the largest element in an array.
let arr1 = [10, 56, 23, 47, 96, 11];

let sortArr1 = arr1.sort((p, q) => p - q);
let rev = sortArr1.reverse();

console.log("Largest number in a array:" + rev[0]);
console.log("------------------------------");

//6)Write a program to find the sum of all numbers in an array.
let arr6 = [10, 45, 6, 35, 41];
let sum = 0;
for (let i = 0; i < arr6.length; i++) {
  sum += arr6[i];
}
console.log("Sum of all Numbers in an array:" + sum);
console.log("------------------------------");

//4)Write a program to remove duplicates from an array in JavaScript.

const arr4 = [2, 5, 3, 5, 7, 2, 8];

const arrs4 = new Set(arr4);
console.log(arrs4);
console.log("------------------------------");

//5)Write a program to check if a string is a palindrome in JavaScript.
const string1 = "Manisha" //prompt("Enter a string:");

isPalindrome(string1);
function isPalindrome(string1) {
  let len = string1.length;
  for (let i = 0; i < string1.length / 2; i++) {
    if (string1[i] != string1[len - 1 - i]) {
      console.log("String is not Palindrome.");
      break;
    }
    else {
      console.log("String is Palindrome.");
      break;
    }
  }
}
console.log("------------------------------");

//2)Write a program to reverse a string in JavaScript.

var sentence = "My Name is Manisha";
console.log("String is:" + sentence);

reverseSentence(sentence);

function reverseSentence(sentence) {
  let reverseStr = "";
  for (let i = sentence.length; i >= 0; i--) {
    reverseStr += sentence[i];
  }
  console.log(reverseStr);
}
console.log("------------------------------");

//9)Write a program to flatten a nested array.

const arr3 = [1, [2, [3, 4, [5, 6]]]];
const arr9 = arr3.flat(3);
console.log(arr9);

const arr7 = [1, [2, [3, 4, [5, 6]]]];
const arrv = arr7.flat(Infinity);

console.log(arrv);
console.log("------------------------------");

//largest element in a array.

const points = [11, 56, 89, 42, 35, 47];

let maxNum = 0;

for (let i = 0; i < points.length; i++) {
  if (points[i] > maxNum) {
    maxNum = points[i];
  }
}
console.log(maxNum);
console.log("------------------------------");


//output : 65

//Find duplicate elements in a array.
const scores = [11, 56, 11, 47, 47, 22, 33, 65];
var dupli = [];
      console.log("Duplicate Elements are:");
for (let i = 0; i < scores.length; i++) {
  for (let j = i+1; j < scores.length; j++) {
    if (scores[i] == scores[j]) {
      console.log(scores[i]);

    }
  }
}
console.log("------------------------------");

//Factorial of a number

const a=prompt("Enter a number:");
let fact=1;
let factorial=FactorialofNumber(a);
console.log(factorial);
function FactorialofNumber(a){
  for(let i=a;i>0;i--){
    fact=fact*i;
  }
  return fact;
}












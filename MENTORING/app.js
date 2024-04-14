//count number of digits in the number
// function count(n){
//     let count = 0;
//     while(n>=1){
//         n = (n - (n%10)) / 10;
//         count++;
//     }
//     console.log(count);
// }
// count(762857)

// function count(n){
//     let count = 0;
//     while(n>=1){
//         n = Math.floor(n/10);
//         count++;
//     }
//     console.log(count);
// }
// count(762857)

// check number is palindrome or not
// function isPalindrome(n) {
//     let str = "";
//     while(n >= 1){
//         let ch = n%10;
//         str += ch;
//         n = (n - (n%10)) / 10;
//     }
//     console.log(str);
//     str = parseInt(str);
//     if(n == str){
//         console.log("palindrome");
//     }else{
//         console.log("not a palindrome");
//     }
// }
// isPalindrome(747)

// function isPalindrome(n) {
//     let reversed = 0;
//     let temp = n;
//     while(temp >= 1){
//         reversed = reversed*10 + temp%10;
//         temp = Math.floor(temp/10);
//     }

//     if(n === reversed){
//         console.log(`${n} is a palindrome number`);
//     }else{
//         console.log(`${n} is not a palindrome number`);
//     }
// }
// isPalindrome(7473)

// check number is prime number or not
// function isPrime(num){
//     let prime = true;
//     for(let i=2; i<num; i++){
//         if(num % i == 0){
//             prime = false;
//         }
//     }
//     if(prime){
//         console.log(`${num} is prime`);
//     }else{
//         console.log(`${num} is not prime`);
//     }
// }
// isPrime(9)












// is array sorted

// function isSorted(arr) {
//   let ascending = true;
//   let descending = true;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       ascending = false;
//     }
//     if (arr[i] < arr[i + 1]) {
//       descending = false;
//     }
//   }

//   return ascending || descending;
// }
// console.log(isSorted([10, 20, 30, 40, 50, 80, 90, 100, 150]));
// console.log(isSorted([10, 20, 50, 47, 78, 41, 12, 45]));



// 2. Write a program to add 2 arrays together by position
 
// let arr1 = [10,20,30]
// let arr2 =  [30,50,40]
// let res = [];
// function addArrays(arr1, arr2) {
//     while (arr1.length && arr2.length){
//         res.push(arr1.shift() + arr2.shift());
//     }
//     return res;
// }
// console.log(addArrays(arr1, arr2));


// function addArrays(arr1, arr2) {
//     let len;
//     if (arr1.length > arr2.length) len = arr1.length;
//     else len = arr2.length;
   
//     let arr = [];
//     for (let i = 0; i < len; i++) {
//       let total = 0;
//       if (arr1[i]) total = total + arr1[i];
//       if (arr2[i]) total = total + arr2[i];
//       arr.push(total);
//     }
   
//     console.log(arr);
// }
// addArrays([30, 50, 40, 50, 60], [10, 20, 30]);

// function add(arr1, arr2) {
//     let i = 0;
//     let arr = [];
//     while (arr1[i] || arr2[i]) {
//       let total = 0;
//       if (arr1[i]) total = total + arr1[i];
//       if (arr2[i]) total = total + arr2[i];
//       arr.push(total);
   
//       i++
//     }
//     console.log(arr);
// }
// add([30, 50, 40, 50, 60], [10, 20, 30])







// find the accuracy of the all elements within the array

function findAccuracy(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]] += 1;
        }else{
            obj[arr[i]] = 1
        }
    }
    return obj;
}
console.log(findAccuracy([10,10,20,20,20,41,41,5,41,78,78,9,10]));
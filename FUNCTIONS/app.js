// let arr = [35, 37, 40, 51, 65, 100, 89];

// function isEven(num) {
//    return num % 2 === 0;
// }
// for(let counter = 0; counter < arr.length; counter++) {
//     let isNumberEven = isEven(arr[counter]);
//     console.log(isNumberEven);
// }

// const obj = {
//     a: 2,
//     b: (p, q) => {
//         return this

//     }
// }
// let res = obj.b(1, 2)
// console.log(res);

// let obj = {
//     a: 1,
//     b:2
// }
// const fun = () =>{
//     console.log(this);
// }
// fun();

// let str = "eye";
// for(let i = 0; i < str.length; i++) {
//    if(str.indexOf(i) == str.lastIndexOf(i)){
//     console.log(str[i]);
//    }
// }









// RECURSION 
// function factorial(n) {
//     if(n == 0) return 1 
//    return n * factorial(n-1);
// }
// console.log(factorial(6));


// let a = 0, b = 1;
// let result = a + " " + b;
// function fibonacci(n) {
//    if(n == 2) return;

//    let res = a+b;
//    result = result + " " + res;
//    a = b;
//    b = res;
   
//    fibonacci(n-1);
// };
// fibonacci(10);
// console.log(result);


// function sumOfDigits(num){
//     if(num < 10) return num;

//    return num%10 +  sumOfDigits(Math.floor(num/10));

// }
// console.log(sumOfDigits(123));



// function reverse(num) {
//  if(num < 10) return num;

//  return num%10 + "" + reverse(Math.floor(num/10));

// }
// console.log(reverse(123));


// function getSumInRange(first, last){
//     if(first == last) return first / last;
//     return first + getSumInRange(first+1, last);
// }
// console.log(getSumInRange(5, 20));



// function getNumberInRange(start, end){
//   if(end - start === 2) return [start+1];
//   let res = getNumberInRange(start, end - 1);
//   res.push(end - 1);
//   return res;
// }
// console.log(getNumberInRange(5, 20));


function swap(a, b) {
  a = a+b;
  b = a-b;
  a = a-b;
  console.log(a, b);
}
swap(1, 2);